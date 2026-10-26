import 'server-only';
import { isIP } from 'node:net';

/** Vercel ingress identity, not a general-purpose forwarded-header parser.
 * https://vercel.com/docs/headers/request-headers#x-vercel-forwarded-for
 * A proxy in front of Vercel may cause this to identify the proxy, not the visitor.
 */
export function checkerClientIp(headers: Headers, env: Record<string, string | undefined> = process.env): string | null {
    const configured = env.CHECKER_CLIENT_IP_HEADER?.toLowerCase();
    // VERCEL must be a server environment value, never a request header.
    if (env.VERCEL === '1' && configured && configured !== 'x-vercel-forwarded-for') return null;
    const header = env.VERCEL === '1' ? 'x-vercel-forwarded-for' : configured;
    const ip = header ? headers.get(header)?.trim() : undefined;
    if (!ip || !isIP(ip)) return null; // Reject chains, ports and malformed addresses; no fallback.
    // Canonicalise equivalent IPv6 spellings before hashing a quota identity.
    return isIP(ip) === 6 ? new URL(`http://[${ip}]/`).hostname.slice(1, -1) : ip;
}
