export const metadata = {
  title: "Contact — Charlotte Billiet",
};

export default function ContactPage() {
  return (
    <section className="section py-12 space-y-10">
      {/* Header same on all major pages */}
      <div className="flex flex-col items-center text-center gap-4">
        <h1 className="title text-[clamp(2.25rem,6vw,3.5rem)] leading-tight text-ink-700">
          Let’s make something together.
        </h1>

        <p className="text-ink-700 text-lg max-w-2xl">
          I’m exploring opportunities in front-end or full-stack development.
          However, I am always happy to collaborate or chat about design & code.
        </p>
      </div>

      {/* Contact card */}
      <div
        className="
          wave-card rounded-3xl p-8 sm:p-10
          border border-marigold/60
          shadow-[0_12px_28px_-12px_rgb(229_157_44_/_0.35),0_8px_18px_-10px_rgb(46_67_101_/_0.22)]
          mx-auto max-w-3xl
        "
      >
        <div className="flex flex-col items-center text-center gap-6">
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <a
              href="mailto:charlotte.billiet25@gmail.com"
              className="btn btn-primary px-6 py-3"
              aria-label="Email Charlotte"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/charlotte-billiet-740814222/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-6 py-3"
              aria-label="Open LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/CharlotteB25"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-6 py-3"
              aria-label="Open GitHub profile"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
