"use client";

import { ArrowRight, Mail } from "lucide-react";
import { useRef } from "react";

function PrimaryButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="inline-flex cursor-pointer items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px"
      style={{ backgroundColor: "var(--color-cta)" }}
      onMouseEnter={() => {
        if (ref.current)
          ref.current.style.backgroundColor = "var(--color-cta-hover)";
      }}
      onMouseLeave={() => {
        if (ref.current)
          ref.current.style.backgroundColor = "var(--color-cta)";
      }}
    >
      {children}
    </button>
  );
}

function OutlineButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      href={href}
      className="inline-flex cursor-pointer items-center gap-2 rounded-lg border-2 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-px"
      style={{
        borderColor: "var(--color-border)",
        color: "var(--color-text)",
        backgroundColor: "transparent",
      }}
      onMouseEnter={() => {
        if (ref.current) {
          ref.current.style.borderColor = "var(--color-secondary)";
          ref.current.style.backgroundColor = "var(--color-surface-raised)";
        }
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.borderColor = "var(--color-border)";
          ref.current.style.backgroundColor = "transparent";
        }
      }}
    >
      {children}
    </a>
  );
}

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="flex min-h-[80vh] w-full items-center"
    >
      <div className="w-full py-16">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
          <p
            className="mb-6 text-sm font-medium uppercase tracking-widest"
            style={{ color: "var(--color-cta)" }}
          >
            BUILDING SCALABLE SYSTEMS
          </p>

          <h1
            id="hero-heading"
            className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
          >
            Hi, I&apos;m&nbsp;João.
          </h1>

          <h2
            className="mt-4 text-xl font-medium leading-snug sm:text-2xl"
            style={{
              fontFamily: "var(--font-heading), system-ui, sans-serif",
              color: "var(--color-text-secondary)",
            }}
          >
            Software Developer specializing in Backend Architecture.
          </h2>

          <p
            className="mt-6 text-base leading-relaxed sm:text-lg"
            style={{
              fontFamily: "var(--font-body), system-ui, sans-serif",
              color: "var(--color-text-secondary)",
            }}
          >
            Focused on building scalable systems and robust APIs with Java,
            Spring Boot, and C#.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PrimaryButton>
              View Projects
              <ArrowRight
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </PrimaryButton>

            <OutlineButton href="mailto:jvcr1501@gmail.com">
              <Mail size={16} strokeWidth={1.75} aria-hidden="true" />
              Contact Me
            </OutlineButton>
          </div>
        </div>
      </div>
    </section>
  );
}
