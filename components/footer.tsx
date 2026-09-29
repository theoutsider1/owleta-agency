import Link from "next/link";

const serviceLinks = [
  { label: "Web Design", href: "/web-design" },
  { label: "Website Redesign", href: "/website-redesign" },
  { label: "Website Maintenance", href: "/website-maintenance" },
  { label: "Website Audit", href: "/website-audit" },
  { label: "SEO", href: "/seo" },
  { label: "Local SEO", href: "/local-seo" },
];

const locationLinks = [
  { label: "Web Design Bournemouth", href: "/web-design-bournemouth" },
  { label: "SEO Bournemouth", href: "/seo-bournemouth" },
];

const owlixirLinks = [
  { label: "Selected Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="site-container">
        {/* Main footer */}
        <div className="grid gap-14 py-16 md:py-20 lg:grid-cols-[1.15fr_1.85fr] lg:gap-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center text-[20px] font-semibold tracking-[-0.03em] text-text-primary"
            >
              Owlixir
              <span className="ml-1 text-primary">.</span>
            </Link>

            <p className="mt-5 max-w-[360px] text-[16px] leading-7 text-text-secondary">
              Websites built to help businesses get found, earn trust and
              generate enquiries.
            </p>

            <p className="mt-7 max-w-[360px] text-[14px] leading-6 text-text-muted">
              Independent web studio working with businesses in the UK and
              beyond.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            <FooterColumn title="Services" links={serviceLinks} />

            <FooterColumn title="Locations" links={locationLinks} />

            <FooterColumn title="Owlixir" links={owlixirLinks} />

            <FooterColumn title="Legal" links={legalLinks} />
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-border py-6 text-[13px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Owlixir. All rights reserved.</p>

          <p>Based in Morocco. Working with businesses internationally.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-text-muted">
        {title}
      </p>

      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[14px] leading-6 text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}