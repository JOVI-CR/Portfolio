import { Database, GitBranch, Award, GraduationCap, Layers } from "lucide-react";
import type { ReactNode } from "react";

// ─── Brand icons (monochromatic, currentColor, 20×20) ────────────────────────

function JavaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      aria-hidden="true"
    >
      {/* Mug body */}
      <path d="M6 4h10v9a5 5 0 0 1-10 0V4z" />
      {/* Handle */}
      <path d="M16 7h2a2.5 2.5 0 0 1 0 5h-2" />
      {/* Saucer hint */}
      <path d="M9 20c1 .6 2 .9 3 .9s2-.3 3-.9" />
    </svg>
  );
}

function SpringBootIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function CSharpIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      aria-hidden="true"
    >
      {/* C arc */}
      <path d="M11 8a4.5 4.5 0 1 0 0 8" />
      {/* # — two vertical bars */}
      <line x1="15.5" y1="9" x2="15.5" y2="15" />
      <line x1="18.5" y1="9" x2="18.5" y2="15" />
      {/* # — two horizontal bars */}
      <line x1="14" y1="11" x2="20" y2="11" />
      <line x1="14" y1="13.5" x2="20" y2="13.5" />
    </svg>
  );
}

function DotNetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      aria-hidden="true"
    >
      {/* Diamond — matches the official .NET logo shape */}
      <path d="M12 3 20 12 12 21 4 12Z" />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      width={20}
      height={20}
      aria-hidden="true"
    >
      {/* Outer box */}
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      {/* T — crossbar + stem */}
      <path
        d="M7 9.5h5.5M9.75 9.5V16"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* S — three-point bezier approximation */}
      <path
        d="M15 9.5c2 0 2.5 1 2.5 1.5s-1 1.25-2 1.25-2 .75-2 1.5 1 1.75 2.5 1.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={20}
      height={20}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      {/* N letterform inside circle */}
      <path d="M8.5 16V8l7 8V8" />
    </svg>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface TechItem {
  name: string;
  sub?: string;
  icon: ReactNode;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

const CATEGORIES: TechCategory[] = [
  {
    title: "Backend & APIs",
    items: [
      { name: "Java", icon: <JavaIcon /> },
      { name: "Spring Boot", icon: <SpringBootIcon /> },
      { name: "C#", icon: <CSharpIcon /> },
      { name: ".NET", icon: <DotNetIcon /> },
    ],
  },
  {
    title: "Frontend & Tools",
    items: [
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "Next.js", icon: <NextJsIcon /> },
      {
        name: "SQL",
        icon: (
          <Database
            size={20}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        ),
      },
      {
        name: "Git",
        icon: (
          <GitBranch
            size={20}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        ),
      },
    ],
  },
  {
    title: "Education & Certifications",
    items: [
      {
        name: "Oracle ONE Program",
        icon: (
          <Award
            size={20}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        ),
      },
      {
        name: "Systems Analysis and Development",
        sub: "PUC Minas",
        icon: (
          <GraduationCap
            size={20}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        ),
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function TechStack() {
  return (
    <section
      aria-labelledby="techstack-heading"
      className="w-full bg-[#f0f0f0] py-24 dark:bg-[#111111]"
    >
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        {/* Section label */}
        <p
          className="mb-12 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-text-muted)" }}
        >
          <span id="techstack-heading" className="sr-only">
            Technical Background
          </span>
          Technical Background
        </p>

        {/* Category grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <div key={category.title}>
              {/* Category heading */}
              <h3
                className="mb-6 text-sm font-semibold"
                style={{
                  fontFamily: "var(--font-heading), system-ui, sans-serif",
                  color: "var(--color-text)",
                  letterSpacing: "0.01em",
                }}
              >
                {category.title}
              </h3>

              {/* Tech list */}
              <ul role="list" className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    {/* Icon wrapper — fixes vertical alignment at w-5 h-5 */}
                    <span
                      className="mt-px flex h-5 w-5 shrink-0 items-center justify-center"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item.icon}
                    </span>

                    <span className="flex flex-col">
                      <span
                        className="text-sm font-medium leading-5"
                        style={{
                          fontFamily: "var(--font-body), system-ui, sans-serif",
                          color: "var(--color-text)",
                        }}
                      >
                        {item.name}
                      </span>
                      {item.sub && (
                        <span
                          className="mt-0.5 text-xs leading-4"
                          style={{
                            fontFamily: "var(--font-body), system-ui, sans-serif",
                            color: "var(--color-text-muted)",
                          }}
                        >
                          {item.sub}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
