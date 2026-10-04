"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    label: "Web Design",
    description: "Websites built around your business goals.",
    href: "/services/web-design",
  },
  {
    label: "Website Redesign",
    description: "Improve what is holding your website back.",
    href: "/services/website-redesign",
  },
  {
    label: "SEO",
    description: "Improve visibility and help the right people find you.",
    href: "/services/seo",
  },
  {
    label: "Website Maintenance",
    description: "Keep your website reliable, current and supported.",
    href: "/services/website-maintenance",
  },
  {
    label: "Website Audit",
    description: "Find what deserves attention before changing things.",
    href: "/services/website-audit",
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="relative z-50">
      <div className="px-4 pt-5 md:px-6 md:pt-6">
        {/* Floating navbar */}
        <div className="relative mx-auto flex h-[68px] w-full max-w-[1180px] items-center justify-between rounded-full border border-border bg-surface px-4 md:w-[75%] md:min-w-[720px] md:px-5 lg:min-w-[850px]">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            aria-label="Owlixir home"
            className="cursor-pointer text-[22px] font-semibold tracking-[-0.04em] text-text-primary"
          >
            Owlix<span className="text-primary">i</span>r
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex"
          >
            {/* Services */}
            <div className="group relative">
              <button
                type="button"
                className="flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2.5 text-[14px] font-medium text-text-secondary transition-colors hover:bg-surface-raised hover:text-text-primary"
              >
                Services

                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  className="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="invisible absolute left-1/2 top-full w-[390px] -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-[16px] border border-border-strong bg-surface p-2 shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
                  <div className="px-3 pb-2 pt-2">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-text-muted">
                      Services
                    </p>
                  </div>

                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="group/item flex cursor-pointer items-start justify-between gap-5 rounded-[10px] px-3 py-3 transition-colors hover:bg-surface-raised"
                    >
                      <div>
                        <p className="text-[14px] font-medium text-text-primary">
                          {service.label}
                        </p>

                        <p className="mt-1 text-[12px] leading-5 text-text-muted">
                          {service.description}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-[13px] text-text-muted transition-[color,transform] group-hover/item:translate-x-0.5 group-hover/item:text-primary"
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/work"
              className="cursor-pointer rounded-full px-4 py-2.5 text-[14px] font-medium text-text-secondary transition-colors hover:bg-surface-raised hover:text-text-primary"
            >
              Work
            </Link>

            <Link
              href="/about"
              className="cursor-pointer rounded-full px-4 py-2.5 text-[14px] font-medium text-text-secondary transition-colors hover:bg-surface-raised hover:text-text-primary"
            >
              About
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden cursor-pointer items-center rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-primary-hover md:inline-flex"
          >
            Start a project

            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>

          {/* Mobile trigger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((current) => !current)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border-strong text-text-primary transition-colors hover:bg-surface-raised md:hidden"
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="h-[18px] w-[18px]"
              >
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="h-[18px] w-[18px]"
              >
                <path
                  d="M4 6H16M4 10H16M4 14H16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile panel */}
        {mobileOpen && (
          <div className="mx-auto mt-2 w-full overflow-hidden rounded-[18px] border border-border bg-surface md:hidden">
            <nav
              aria-label="Mobile navigation"
              className="px-4 pb-4"
            >
              <div className="border-b border-border">
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() =>
                    setMobileServicesOpen(
                      (current) => !current
                    )
                  }
                  className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-[15px] font-medium text-text-primary"
                >
                  Services

                  <svg
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className={`h-3 w-3 text-text-muted transition-transform duration-200 ${mobileServicesOpen
                        ? "rotate-180"
                        : ""
                      }`}
                  >
                    <path
                      d="M3 4.5L6 7.5L9 4.5"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {mobileServicesOpen && (
                  <div className="pb-4">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={closeMobileMenu}
                        className="group flex cursor-pointer items-center justify-between gap-4 rounded-[8px] px-3 py-3 transition-colors hover:bg-surface-raised"
                      >
                        <span className="text-[14px] text-text-secondary transition-colors group-hover:text-text-primary">
                          {service.label}
                        </span>

                        <span
                          aria-hidden="true"
                          className="text-[12px] text-text-muted transition-colors group-hover:text-primary"
                        >
                          →
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/work"
                onClick={closeMobileMenu}
                className="block cursor-pointer border-b border-border py-4 text-[15px] font-medium text-text-primary"
              >
                Work
              </Link>

              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block cursor-pointer border-b border-border py-4 text-[15px] font-medium text-text-primary"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Start a project

                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}