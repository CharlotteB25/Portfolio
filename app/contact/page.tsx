export const metadata = {
  title: "Contact — Charlotte Billiet",
};

export default function ContactPage() {
  return (
    <main className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-6 py-20 bg-paper/30">
      <section className="wave-card rounded-3xl p-10 max-w-3xl text-center space-y-8 border border-marigold/50 shadow-md shadow-marigold/10">
        <div>
          <h1 className="text-4xl font-semibold text-ink-700 mb-2">
            Let’s make something together.
          </h1>
          <p className="text-pearl-900 text-lg max-w-prose mx-auto leading-relaxed">
            I’m always open to collaborations, freelance work, or just chatting
            about design and development. Reach out — I’d love to hear from you!
          </p>
        </div>

        {/* Contact options */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
          <a
            href="mailto:charlotte.billiet25@gmail.com"
            className="btn text-sm px-6 py-3"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/charlottebilliet/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-sm px-6 py-3 border border-marigold/60 hover:bg-marigold/10 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/charlottebilliet"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-sm px-6 py-3 border border-marigold/60 hover:bg-marigold/10 transition"
          >
            GitHub
          </a>
        </div>

        {/* Soft divider */}
        <hr className="border-marigold/30 my-6 w-2/3 mx-auto" />

        {/* Footer quote */}
        <p className="text-sm text-pearl-900 italic">
          “Good design is as little design as possible.” — Dieter Rams
        </p>
      </section>
    </main>
  );
}
