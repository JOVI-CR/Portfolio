"use client";

import {
  Database,
  Code2,
  Braces,
  ArrowUpRight,
  CreditCard,
  Layers,
  LayoutTemplate,
} from "lucide-react";
import type { ReactNode } from "react";
import { TechIconTooltip } from "@/components/ui/TechIconTooltip";

function PythonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width={16}
      height={16}
      aria-hidden="true"
    >
      {/* Top snake — right-facing */}
      <path d="M12 2c-2.21 0-4 1.15-4 3.5V7h4v1H6C3.79 8 2 9.79 2 12v2.5C2 16.85 3.79 18 6 18h1.5v-2c0-2.21 1.79-4 4-4h3c2.21 0 4-1.79 4-4V5.5C18.5 3.15 16.71 2 14.5 2H12zm-.75 2.25c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
      {/* Bottom snake — left-facing */}
      <path d="M12 22c2.21 0 4-1.15 4-3.5V17h-4v-1h6c2.21 0 4-1.79 4-4v-2.5C22 7.15 20.21 6 18 6h-1.5v2c0 2.21-1.79 4-4 4h-3c-2.21 0-4 1.79-4 4V18.5C5.5 20.85 7.29 22 9.5 22H12zm.75-2.25c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
    </svg>
  );
}

function JavaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={16}
      height={16}
      aria-hidden="true"
    >
      <path d="M6 4h10v9a5 5 0 0 1-10 0V4z" />
      <path d="M16 7h2a2.5 2.5 0 0 1 0 5h-2" />
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
      width={16}
      height={16}
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function TypeScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={16} height={16} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 9.5h5.5M9.75 9.5V16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
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
      width={16}
      height={16}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 16V8l7 8V8" />
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
      width={16}
      height={16}
      aria-hidden="true"
    >
      <path d="M11 8a4.5 4.5 0 1 0 0 8" />
      <line x1="15.5" y1="9" x2="15.5" y2="15" />
      <line x1="18.5" y1="9" x2="18.5" y2="15" />
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
      width={16}
      height={16}
      aria-hidden="true"
    >
      <path d="M12 3 20 12 12 21 4 12Z" />
    </svg>
  );
}

function JavaScriptIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={16} height={16} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10.5 9.5v4.5c0 1.2-.8 1.75-1.75 1.75-.65 0-1.2-.35-1.5-.9"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />

      <path
        d="M14 9.5c2 0 2.5 1 2.5 1.5s-1 1.25-2 1.25-2 .75-2 1.5 1 1.75 2.5 1.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  title: string;
  description: string;
  tag?: string;
  techStack: ReactNode[];
  link: ProjectLink;
  secondaryLink?: ProjectLink;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ICON_PROPS = { size: 16, strokeWidth: 1.5, "aria-hidden": true } as const;

const PROJECTS: Project[] = [
  {
    title: "Adriani Imóveis — Real Estate Agency Platform",
    tag: "Personal Project",
    description:
      "Full-stack real estate platform built for a real estate agency in Cabo Frio, RJ — replacing their legacy site. Backend in Java 21 / Spring Boot 3.3, PostgreSQL, with Google OAuth2, Stripe payments, and automated email workflows (Resend). Frontend in Next.js 16 / TypeScript, deployed on Vercel.",
    techStack: [
      <TechIconTooltip key="java" label="Java">
        <JavaIcon />
      </TechIconTooltip>,
      <TechIconTooltip key="spring" label="Spring Boot">
        <SpringBootIcon />
      </TechIconTooltip>,
      <TechIconTooltip key="postgres" label="PostgreSQL">
        <Database {...ICON_PROPS} />
      </TechIconTooltip>,
      <TechIconTooltip key="next" label="Next.js">
        <NextJsIcon />
      </TechIconTooltip>,
      <TechIconTooltip key="ts" label="TypeScript">
        <TypeScriptIcon />
      </TechIconTooltip>,
      <TechIconTooltip key="stripe" label="Stripe">
        <CreditCard {...ICON_PROPS} />
      </TechIconTooltip>,
    ],
    link: { label: "Live Site", href: "https://www.adrianiimoveis.com.br/" },
    // TODO: confirm exact docs repo URL before adding this link. Do NOT link the private backend repo.
    secondaryLink: { label: "Docs", href: "#" },
  },
  {
    title: "Gestão-360",
    tag: "Volunteer Project",
    description:
      "Management platform for spiritual centers, focused on workflow optimization and scalable backend architecture. Designed for multi-tenant operation with role-based access control.",
    techStack: [
      <TechIconTooltip key="ts" label="TypeScript">
        <TypeScriptIcon />
      </TechIconTooltip>,
      <TechIconTooltip key="next" label="Next.js">
        <NextJsIcon />
      </TechIconTooltip>,
      // TODO: confirm specific DB engine for a more precise tooltip label.
      <TechIconTooltip key="db" label="Database">
        <Database {...ICON_PROPS} />
      </TechIconTooltip>,
    ],
    // TODO: confirm GitHub URL for Gestão Espírita 360 — pending answer.
    link: { label: "GitHub", href: "#" },
  },
  {
    title: "ChurnInsight",
    tag: "Hackathon",
    description:
      "Architected a decoupled microservices system to predict banking customer churn. Built a Java/Spring Boot API gateway that orchestrates requests to a Python/FastAPI inference engine, utilizing a dual-contract pattern to safely isolate ML models from external integrations.",
    techStack: [
      <TechIconTooltip key="py" label="Python">
        <PythonIcon />
      </TechIconTooltip>,
      // TODO: confirm specific DB engine for a more precise tooltip label.
      <TechIconTooltip key="db" label="Database">
        <Database {...ICON_PROPS} />
      </TechIconTooltip>,
      <TechIconTooltip key="java" label="Java">
        <JavaIcon />
      </TechIconTooltip>,
      <TechIconTooltip key="spring" label="Spring Boot">
        <SpringBootIcon />
      </TechIconTooltip>,
    ],
    link: { label: "GitHub", href: "https://github.com/FabioAguiar/churninsight-hackathon-one" },
  },
  {
    title: "Ink Manager",
    tag: "Academic",
    description:
      "Collaborative academic project for tattoo studio management, featuring comprehensive technical documentation, a RESTful API layer, and a structured frontend UI built for real-world workflow.",
    techStack: [
      <TechIconTooltip key="js" label="JavaScript">
        <JavaScriptIcon />
      </TechIconTooltip>,
      <TechIconTooltip key="html" label="HTML">
        <Code2 {...ICON_PROPS} />
      </TechIconTooltip>,
      <TechIconTooltip key="css" label="CSS">
        <Braces {...ICON_PROPS} />
      </TechIconTooltip>,
    ],
    // TODO: confirm GitHub URL, or mark as private repository — pending answer.
    link: { label: "GitHub", href: "#" },
  },
  {
    title: "PopFarma — Pharmacy Management System",
    tag: "Academic",
    description:
      "Team academic project (PUC Minas): a full pharmacy management system for tracking government-distributed medications. Backend in C# / .NET 8 with Entity Framework Core (code-first migrations), SQL Server, and ASP.NET Core Identity with Claims-based role authorization. Implemented staff management, medication search/inventory, and role-based dashboards following the MVC pattern.",
    techStack: [
      <TechIconTooltip key="csharp" label="C#">
        <CSharpIcon />
      </TechIconTooltip>,
      <TechIconTooltip key="dotnet" label=".NET">
        <DotNetIcon />
      </TechIconTooltip>,
      // TODO: confirm "EF Core" vs "Entity Framework Core" for this tooltip.
      <TechIconTooltip key="efcore" label="Entity Framework Core">
        <Layers {...ICON_PROPS} />
      </TechIconTooltip>,
      <TechIconTooltip key="sqlserver" label="SQL Server">
        <Database {...ICON_PROPS} />
      </TechIconTooltip>,
      <TechIconTooltip key="mvc" label="MVC">
        <LayoutTemplate {...ICON_PROPS} />
      </TechIconTooltip>,
    ],
    // TODO: add public repo URL once cloned from private university repo — confirm with teammates before publishing.
    link: { label: "GitHub", href: "#" },
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ProjectTag({ label }: { label: string }) {
  return (
    <span
      className="inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
      style={{
        borderColor: "var(--color-border)",
        color: "var(--color-text-muted)",
      }}
    >
      {label}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="group flex flex-col rounded-xl border p-6 transition-colors duration-200"
      style={{
        backgroundColor: "var(--color-surface)",
        borderColor: "var(--color-border)",
      }}
    >

      <div className="flex-1">
        {project.tag && (
          <div className="mb-3">
            <ProjectTag label={project.tag} />
          </div>
        )}

        <h3
          className="text-base font-semibold leading-snug"
          style={{
            fontFamily: "var(--font-heading), system-ui, sans-serif",
            color: "var(--color-text)",
          }}
        >
          {project.title}
        </h3>

        <p
          className="mt-2 text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            color: "var(--color-text-secondary)",
          }}
        >
          {project.description}
        </p>
      </div>

      <div
        className="mt-6 flex items-center justify-between border-t pt-4"
        style={{ borderColor: "var(--color-border)" }}
      >
        <ul
          role="list"
          className="flex items-center gap-3"
          aria-label="Technologies used"
          style={{ color: "var(--color-text-muted)" }}
        >
          {project.techStack.map((icon, i) => (
            <li key={i}>{icon}</li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {[project.link, project.secondaryLink]
            .filter((link): link is ProjectLink => link != null)
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href !== "#" ? "_blank" : undefined}
                rel={link.href !== "#" ? "noopener noreferrer" : undefined}
                aria-label={`${link.label} — ${project.title}`}
                className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium transition-colors duration-150"
                style={{ color: "var(--color-text-muted)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-cta)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-text-muted)";
                }}
              >
                {link.label}
                <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
              </a>
            ))}
        </div>
      </div>
    </article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ProjectCards() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="w-full py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
        <p
          className="mb-2 text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--color-text-muted)" }}
        >
          Work
        </p>

        <h2
          id="projects-heading"
          className="mb-12 text-2xl font-semibold tracking-tight"
          style={{
            fontFamily: "var(--font-heading), system-ui, sans-serif",
            color: "var(--color-text)",
          }}
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
