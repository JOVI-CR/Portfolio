export default function Home() {
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-24"
      aria-label="Home"
    >
      <h1
        className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
        style={{ fontFamily: "var(--font-heading), system-ui, sans-serif" }}
      >
        Hello, World
      </h1>
      <p
        className="mt-6 max-w-xl text-lg leading-relaxed"
        style={{ color: "var(--color-text-secondary)" }}
      >
        Layout base configured. Navbar, Footer, and theme switching are active.
      </p>
    </section>
  );
}
