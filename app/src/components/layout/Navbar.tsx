"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import type { SVGProps } from "react";

// ─── Social icons (same paths as Footer) ─────────────────────────────────────

function IconGitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      width={20}
      height={20}
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
      width={20}
      height={20}
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

// ─── Nav items ────────────────────────────────────────────────────────────────

// isAnchor = true → native <a> (prevents Next.js router from intercepting #hash)
const NAV_LINKS = [
  { href: "/", label: "Home", isAnchor: false },
  { href: "#tech-stack", label: "Tech Stack", isAnchor: true },
  { href: "#projects", label: "Projects", isAnchor: true },
] as const;

const SOCIAL_LINKS = [
  {
    href: "https://github.com/JOVI-CR",
    label: "GitHub",
    Icon: IconGitHub,
  },
  {
    href: "https://www.linkedin.com/in/joao-vitor-carlos-da-rocha/",
    label: "LinkedIn",
    Icon: IconLinkedIn,
  },
] as const;

// ─── Theme toggle ─────────────────────────────────────────────────────────────

// Returns false during SSR/hydration and true once mounted on the client,
// without an effect + setState (avoids the extra cascading render).
function useHasMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHasMounted();

  if (!mounted) {
    return <span className="inline-flex h-9 w-9 items-center justify-center" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors duration-200"
      style={{ color: "var(--color-text-secondary)" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text)";
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--color-surface-raised)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.color = "var(--color-text-secondary)";
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
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

// ─── Navbar ───────────────────────────────────────────────────────────────────

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close mobile menu on route change (adjusted during render, not in an effect)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
  }

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
        {/* ── Left: Logo ── */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="cursor-pointer text-base font-semibold tracking-tight transition-opacity duration-150 hover:opacity-70"
          style={{
            color: "var(--color-text)",
            fontFamily: "var(--font-heading), system-ui, sans-serif",
          }}
        >
          Portfolio
        </Link>

        {/* ── Centre: Nav links (desktop) ── */}
        <ul role="list" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ href, label, isAnchor }) => {
            const isActive = !isAnchor && (href === "/" ? pathname === "/" : pathname.startsWith(href));
            const baseClass =
              "cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150";

            if (isAnchor) {
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={baseClass}
                    style={{ color: "var(--color-text-secondary)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-surface-raised)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-secondary)";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    }}
                  >
                    {label}
                  </a>
                </li>
              );
            }

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={baseClass}
                  style={{
                    color: isActive ? "var(--color-cta)" : "var(--color-text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-surface-raised)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-secondary)";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    }
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1">

          <div className="mr-1 hidden items-center gap-1 md:flex">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors duration-200"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text)";
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-surface-raised)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--color-text-secondary)";
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>

          <ThemeToggle />

          <a
            href="mailto:jvcr1501@gmail.com"
            className="ml-1 hidden cursor-pointer rounded-md px-4 py-2 text-sm font-semibold text-white transition-all duration-200 md:inline-flex"
            style={{ backgroundColor: "var(--color-cta)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-cta-hover)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--color-cta)";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
            }}
          >
            Contact Me
          </a>

          {/* Hamburger — mobile only */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="ml-1 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors duration-200 md:hidden"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {mobileOpen ? (
              <X size={20} strokeWidth={1.75} aria-hidden="true" />
            ) : (
              <Menu size={20} strokeWidth={1.75} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          style={{
            backgroundColor: "var(--color-surface)",
            borderTopColor: "var(--color-border)",
          }}
          className="border-t md:hidden"
        >
          <div className="mx-auto max-w-6xl space-y-1 px-6 py-4">
            {/* Nav links */}
            {NAV_LINKS.map(({ href, label, isAnchor }) => {
              const isActive = !isAnchor && (href === "/" ? pathname === "/" : pathname.startsWith(href));
              const sharedClass =
                "block w-full cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150";

              if (isAnchor) {
                return (
                  <a
                    key={href}
                    href={href}
                    className={sharedClass}
                    style={{ color: "var(--color-text-secondary)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                );
              }

              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={sharedClass}
                  style={{
                    color: isActive ? "var(--color-cta)" : "var(--color-text-secondary)",
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              );
            })}

            {/* Divider */}
            <div
              className="my-3 border-t"
              style={{ borderTopColor: "var(--color-border)" }}
            />

            {/* Social links */}
            <div className="flex items-center gap-3 px-3 py-1">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md transition-colors duration-200"
                  style={{ color: "var(--color-text-secondary)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Hire me */}
            <a
              href="mailto:jvcr1501@gmail.com"
              className="mt-1 block w-full cursor-pointer rounded-md px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors duration-150"
              style={{ backgroundColor: "var(--color-cta)" }}
              onClick={() => setMobileOpen(false)}
            >
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
