"use client";

import Link from "next/link";
import type { ReactNode, SVGProps } from "react";

function IconGitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      width={18}
      height={18}
      {...props}
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function IconLinkedIn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      width={18}
      height={18}
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

const SOCIAL_LINKS: Array<{ href: string; label: string; icon: ReactNode }> = [
  {
    href: "https://github.com/JOVI-CR",
    label: "GitHub profile",
    icon: <IconGitHub />,
  },
  {
    href: "https://www.linkedin.com/in/joao-vitor-carlos-da-rocha/",
    label: "LinkedIn profile",
    icon: <IconLinkedIn />,
  },
  {
    href: "mailto:jvcr1501@gmail.com",
    label: "Send email",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        width={18}
        height={18}
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const NAV_COLUMNS = [
  {
    heading: "Navigation",
    links: [
      { href: "/", label: "Home" },
      { href: "/projects", label: "Projects" },
      { href: "/about", label: "About" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/terms", label: "Terms of use" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        borderTopColor: "var(--color-border)",
        backgroundColor: "var(--color-surface)",
      }}
      className="w-full border-t"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand column */}
          <div className="w-full pr-12 md:col-span-2">
            <Link
              href="/"
              className="cursor-pointer text-base font-semibold tracking-tight transition-opacity duration-150 hover:opacity-70"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-heading), system-ui, sans-serif",
              }}
            >
              Portfolio
            </Link>
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Designing and building digital products with clarity and purpose.
            </p>

            {/* Social links */}
            <ul role="list" className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ href, label, icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    aria-label={label}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors duration-150"
                    style={{ color: "var(--color-text-secondary)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-text)";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "var(--color-surface-raised)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-text-secondary)";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "transparent";
                    }}
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation columns */}
          {NAV_COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="md:justify-self-end">
              <h2
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-text-muted)" }}
              >
                {heading}
              </h2>
              <ul role="list" className="mt-4 space-y-3">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="cursor-pointer text-sm transition-colors duration-150"
                      style={{ color: "var(--color-text-secondary)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--color-text)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "var(--color-text-secondary)";
                      }}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 flex flex-col items-start justify-between gap-4 border-t pt-6 sm:flex-row sm:items-center"
          style={{ borderTopColor: "var(--color-border)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            &copy; {year} Portfolio. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
