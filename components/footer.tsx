import Link from "next/link";

const serviceLinks = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "Website Redesign", href: "/services/website-redesign" },
  { label: "Website Maintenance", href: "/services/website-maintenance" },
  { label: "Website Audit", href: "/services/website-audit" },
  { label: "SEO", href: "/services/seo" },
  { label: "Local SEO", href: "/services/local-seo" },
];

const locationLinks = [
  {
    label: "Web Design Bournemouth",
    href: "/services/web-design-bournemouth",
  },
  {
    label: "SEO Bournemouth",
    href: "/services/seo-bournemouth",
  },
];

const owlixirLinks = [
  { label: "Selected Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
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
              aria-label="Owlixir home"
              className="inline-flex cursor-pointer text-[22px] font-semibold tracking-[-0.04em] text-text-primary"
            >
              Owlix<span className="text-primary">i</span>r
            </Link>

            <p className="mt-5 max-w-[360px] text-[17px] leading-7 text-text-secondary md:text-[18px]">
              Websites built to help businesses get found, earn trust and
              generate enquiries.
            </p>

            <p className="mt-7 max-w-[360px] text-[15px] leading-6 text-text-secondary md:text-[16px]">
              Independent web studio working with businesses in the UK and
              beyond.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">
            <FooterColumn title="Services" links={serviceLinks} />
            <FooterColumn title="Locations" links={locationLinks} />
            <FooterColumn title="Owlixir" links={owlixirLinks} />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col gap-4 text-[13px] leading-5 text-text-muted lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <p>© 2026 Owlixir. All rights reserved.</p>

              <nav
                aria-label="Legal"
                className="flex items-center gap-5"
              >
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="cursor-pointer transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <p>
              Based in Morocco. Working with businesses internationally.
            </p>
          </div>
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
              className="cursor-pointer text-[14px] leading-6 text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}