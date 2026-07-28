import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const SITE_TITLE =
  "João Vítor Carlos da Rocha — Backend Developer (Java/Spring Boot & .NET)";
const SITE_DESCRIPTION =
  "Backend developer specializing in Java/Spring Boot and C#/.NET, building full-stack systems from real estate platforms to pharmacy management applications. Currently pursuing a B.Sc. in Systems Analysis and Development.";

export const metadata: Metadata = {
  // TODO: replace with production domain once deployment platform is decided.
  metadataBase: new URL("https://TODO-domain.vercel.app"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    // TODO: add an og:image (1200x630) once one is created — intentionally
    // omitted for now rather than pointing at a non-existent file.
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // TODO: add a twitter:image once the OG image asset exists.
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} motion-safe:scroll-smooth`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {/* Skip-to-content link for keyboard users */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
            style={{ backgroundColor: "var(--color-cta)" }}
          >
            Skip to content
          </a>

          <div className="flex min-h-dvh flex-col">
            <Navbar />

            <main
              id="main-content"
              role="main"
              className="flex-1 pt-16"
              tabIndex={-1}
            >
              {children}
            </main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
