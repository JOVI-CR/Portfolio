"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        className="inline-flex h-9 w-9 items-center justify-center"
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors duration-200"
      style={{
        color: "var(--color-text-secondary)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color =
          "var(--color-text)";
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          "var(--color-surface-raised)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color =
          "var(--color-text-secondary)";
        (e.currentTarget as HTMLButtonElement).style.backgroundColor =
          "transparent";
      }}
    >
      {isDark ? (
        <Sun size={18} strokeWidth={1.75} aria-hidden="true" />
      ) : (
        <Moon size={18} strokeWidth={1.75} aria-hidden="true" />
      )}
    </button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      role="banner"
      style={{
        backgroundColor: scrolled
          ? "var(--color-surface)"
          : "var(--color-background)",
        borderBottomColor: "var(--color-border)",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
      className="fixed inset-x-0 top-0 z-50 border-b transition-all duration-200"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        {/* Logo / wordmark */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="cursor-pointer font-heading text-base font-semibold tracking-tight transition-opacity duration-150 hover:opacity-70"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-heading), system-ui, sans-serif" }}
        >
          Portfolio
        </Link>

        {/* Navigation links */}
        <ul
          role="list"
          className="hidden items-center gap-1 sm:flex"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className="cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150"
                  style={{
                    color: isActive
                      ? "var(--color-cta)"
                      : "var(--color-text-secondary)",
                    backgroundColor: isActive
                      ? "var(--color-cta)1a"
                      : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-text)";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "var(--color-surface-raised)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-text-secondary)";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "transparent";
                    }
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* CTA button */}
          <Link
            href="/contact"
            className="hidden cursor-pointer rounded-md px-4 py-2 text-sm font-semibold text-white transition-all duration-200 sm:inline-flex"
            style={{ backgroundColor: "var(--color-cta)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "var(--color-cta-hover)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "var(--color-cta)";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
            }}
          >
            Hire me
          </Link>
        </div>
      </nav>
    </header>
  );
}
