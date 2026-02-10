"use client";

import React, { useMemo } from "react";

// ------------ Utilities ------------
const cx = (...classes: Array<string | false | undefined | null>) =>
  classes.filter(Boolean).join(" ");

// ------------ Badge ------------
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full px-3 py-2 text-xs font-medium mr-2 mb-2 text-marigold bg-paper/70">
    {children}
  </span>
);

// ------------ JSON-LD ------------
function JsonLd({ data }: { data: Record<string, any> }) {
  const json = useMemo(() => JSON.stringify(data), [data]);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

// ------------ Main Page ------------
export default function HobbyHelperDetail() {
  const project = {
    title: "Hobby Helper",
    subtitle:
      "A gentle, research-driven hobby discovery app that helps young adults escape doomscrolling and reconnect with meaningful, low-pressure hobbies.",
    period: "Feb 2024 – Jun 2025",
    role: "Concept, UX research, UI design & development (Bachelor thesis)",
    location: "Artevelde University of Applied Sciences – Ghent, BE",
    status: "Prototype available via Expo Go",
  } as const;

  const EXPO_URL =
    "https://expo.dev/accounts/charsie/projects/frontend/builds/e909dac7-8dc6-4a4e-b2a6-03b12665efd3"; // TODO: replace
  const GITHUB_URL = "https://github.com/CharlotteB25/hobby-helper"; // TODO: replace
  const THESIS_URL = "/documents/HobbyHelper-thesis.pdf";

  const highlights = [
    "Rooted in research around 'leisure fatigue', wellbeing and free time.",
    "Curated suggestions instead of infinite feeds or gamified streaks.",
    "Soft, warm visual identity that invites rest instead of productivity pressure.",
    "Expo Go prototype used in an expo stand with a screen-break 'hobby corner' concept.",
  ];

  const stack = [
    "React Native",
    "Expo",
    "TypeScript",
    "Context-based state",
    "REST APIs",
    "Adobe XD",
    "MongoDB",
    "Node.js",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: project.title,
    description: project.subtitle,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Android, iOS",
    creator: { "@type": "Person", name: "Charlotte Billiet" },
    about: highlights,
  };

  return (
    <main className="min-h-screen">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="section pt-16 pb-10 md:pt-24 md:pb-14">
        <a
          href="/projects"
          className="text-sm opacity-80 hover:opacity-100 link-underline"
        >
          ← Back to projects
        </a>

        <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(260px,1.2fr)] md:items-start">
          {/* Left: Copy */}
          <div>
            {/* Icon + Title inline */}
            <div className="flex items-center gap-3">
              <img
                src="/hobbyhelper/icon.png"
                alt="Hobby Helper icon"
                className="h-10 w-10 rounded-xl object-contain"
              />
              <h1 className="title text-3xl md:text-5xl tracking-tight">
                {project.title}
              </h1>
            </div>

            <p className="mt-3 max-w-3xl text-base md:text-lg text-ink-700">
              {project.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-3 items-center text-[10px] md:text-xs">
              <span className="uppercase tracking-wide px-3 py-1 rounded-full border border-marigold text-ink-700">
                {project.period}
              </span>
              <span className="uppercase tracking-wide px-3 py-1 rounded-full border border-marigold text-ink-700">
                {project.role}
              </span>
              <span className="uppercase tracking-wide px-3 py-1 rounded-full border border-marigold text-ink-700">
                {project.location}
              </span>
              <span className="uppercase tracking-wide px-3 py-1 rounded-full border border-marigold text-ink-700">
                {project.status}
              </span>
            </div>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a
                href={EXPO_URL}
                className={cx(
                  "btn btn-primary inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold gap-2",
                )}
              >
                Open in Expo Go
                <span className="text-[10px] opacity-80">(scan or tap)</span>
              </a>
              <a
                href={GITHUB_URL}
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold border border-marigold text-ink-700 hover:bg-paper/70 transition"
              >
                View code on GitHub
              </a>
              <a
                href={THESIS_URL}
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold border border-blood/60 text-ink-700 hover:bg-paper/70 transition"
              >
                Read research &amp; thesis (PDF)
              </a>
            </div>
          </div>

          {/* Right: Poster + QR */}
          <div className="flex flex-col gap-4">
            {/* Poster */}
            <div className="wave-card overflow-hidden rounded-3xl p-3 bg-paper/80">
              <div className="relative">
                <img
                  src="/hobbyhelper/hobbyHelperPoster.png"
                  alt="Hobby Helper poster"
                  className="w-full rounded-2xl object-cover shadow-lg"
                />
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-32 bg-[radial-gradient(circle_at_top_left,rgba(255,182,75,0.24),transparent)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section grid md:grid-cols-3 gap-8 pb-20">
        {/* Left column */}
        <div className="md:col-span-2 space-y-8">
          {/* Problem → Solution */}
          <div className="wave-card p-6">
            <h2 className="text-lg font-semibold">
              From leisure fatigue to gentle suggestions
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink">
              <p>
                Hobby Helper was born from my own experience of coming home
                tired after work or classes, but still wanting to do something
                meaningful instead of defaulting to scrolling and comfort shows.
                My research among young adults (20–35) confirmed this pattern:
                people aren&apos;t short on free time, they&apos;re short on
                mental energy, ideas and that tiny nudge to start.
              </p>
              <p>
                Through surveys, academic research and interviews I found
                barriers like decision overload, fear of &quot;wasting
                time&quot;, financial concerns and the pressure to make every
                hour productive. Users didn&apos;t need a new productivity
                tracker, they needed a soft, supportive tool that says:
                <strong>
                  {" "}
                  “hey! here are three hobbies you could do, go ahead and pick
                  one and go play.”
                </strong>
              </p>
              <p>
                Hobby Helper lets users indicate what mood they&apos;re in and
                what kind of activity they&apos;re open to. The app responds
                with a small, curated set of beginner-friendly hobbies with
                concrete first steps No streaks, points or gamification just
                calm guidance.
              </p>
            </div>
          </div>

          {/* Experience & design */}
          <div className="wave-card p-6">
            <h2 className="text-lg font-semibold">
              Designing for softness, not pressure
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink list-disc pl-5">
              <li>
                <strong>Minimal choice:</strong> limiting suggestions to three
                reduces decision fatigue and keeps the experience light.
              </li>
              <li>
                <strong>Warm visual language:</strong> soft curves, right orange
                and minty tones, and rounded shapes to create a &quot;hobby
                nook&quot; feeling.
              </li>
              <li>
                <strong>Ethical copy:</strong> language that avoids hustle
                culture and instead validates rest, curiosity and trying things
                without needing to be “good” at them.
              </li>
              <li>
                <strong>Screen-break principle:</strong> the app’s goal is to
                get you <em>off</em>
                the screen into a real activity as quickly as possible.
              </li>
            </ul>
          </div>

          {/* Personal growth */}
          <div className="wave-card p-6">
            <h2 className="text-lg font-semibold">
              What this project taught me
            </h2>
            <ul className="mt-4 grid gap-2 text-sm list-disc pl-5 text-ink">
              <li>
                Translating <strong>theoretical research</strong> on wellbeing
                and leisure into concrete interaction patterns and content
                strategy.
              </li>
              <li>
                Designing a <strong>consistent mobile design system</strong> and
                implementing it in React Native with reusable components and
                theming.
              </li>
              <li>
                Running <strong>user tests</strong>, gathering feedback and
                iterating without compromising the core ethical principles of
                the concept.
              </li>
              <li>
                Strengthening my belief that digital products can{" "}
                <strong>protect users’ energy</strong> instead of exploiting it
                — and that this can be a strong design constraint, not a
                limitation.
              </li>
            </ul>
          </div>
        </div>

        {/* Right column */}
        <aside className="md:col-span-1 space-y-8">
          {/* QR block */}
          <div className="wave-card flex items-center gap-3 rounded-3xl p-4">
            <div className="rounded-2xl overflow-hidden border border-blood/40 bg-paper/80 p-2">
              <img
                src="/hobbyhelper/hobbyHelperBuild-1311.png"
                alt="QR code linking to the latest Hobby Helper Expo Go build"
                className="w-24 h-24 object-contain"
              />
            </div>
            <div className="text-xs text-ink-700">
              <p className="font-semibold text-ink">Try Hobby Helper</p>
              <p className="mt-1">
                Scan this QR code with Expo Go to open the current prototype on
                your phone.
              </p>
              <a
                href="https://expo.dev/accounts/charsie/projects/frontend/builds/e909dac7-8dc6-4a4e-b2a6-03b12665efd3"
                className="mt-2 inline-block link-underline"
              >
                Or tap here on mobile →
              </a>
            </div>
          </div>
          {/* Quick facts */}
          <div className="wave-card p-6 text-sm text-ink">
            <h3 className="font-semibold mb-4">Quick facts</h3>
            <dl className="grid grid-cols-3 gap-2">
              <dt className="col-span-1 opacity-70">Scope</dt>
              <dd className="col-span-2">Bachelor thesis • Solo project</dd>

              <dt className="col-span-1 opacity-70">Focus</dt>
              <dd className="col-span-2">
                Leisure fatigue • Mental wellbeing • Ethical UX
              </dd>

              <dt className="col-span-1 opacity-70">Stack</dt>
              <dd className="col-span-2">{stack.join(" • ")}</dd>

              <dt className="col-span-1 opacity-70">Deliverables</dt>
              <dd className="col-span-2">
                Expo prototype • Research report • Brand & UI system • Expo
                stand concept
              </dd>
            </dl>
          </div>

          {/* Highlights */}
          <div className="wave-card p-6 text-sm text-ink">
            <h3 className="font-semibold mb-3">Highlights</h3>
            <div className="flex flex-wrap">
              {highlights.map((h) => (
                <Badge key={h}>{h}</Badge>
              ))}
            </div>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="section pb-24 text-xs opacity-70">
        <p>
          Built as my final bachelor project in Grafische &amp; Digitale Media –
          New Media Development.
        </p>
      </footer>
    </main>
  );
}
