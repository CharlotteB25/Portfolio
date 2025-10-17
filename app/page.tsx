"use client";

import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { useEffect, useState } from "react";

export default function Home() {
  const projects = getProjects().slice(0, 6);
  const words = ["playful", "creative", "mindful", "curious", "vibrant"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      2500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="space-y-10 sm:space-y-10 mt-10">
      {/* HERO — billboard with playful accents
      ch - css length unit for text layout, linked to the typography and not the pixels or percentages best for this section
      ch keeps the text animation smooth by reserving space equal to about 6-7 characters */}
      <section className="relative isolate">
        <div className="section grid grid-cols-1 xl:grid-cols-12 gap-10 items-start">
          <div className="xl:col-span-8 ">
            <h1 className="title text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.2] tracking-tight">
              I design & build{" "}
              <span className="relative inline-block min-w-[6.5ch]">
                <span
                  key={words[index]}
                  className="text-marigold inline-block animate-fade-slide transition-all duration-700 ease-in-out"
                >
                  {words[index]}
                </span>
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-2 h-2 rounded-full anim-wave-slide"
                />
              </span>
              digital experiences.
            </h1>

            {/* Balanced About Me */}
            <p className="text-ink-700 text-lg max-w-2xl pt-6 leading-relaxed">
              I’m Charlotte — a recent graduate in fullstack development with
              experience in frontend design and backend development. Growing up
              across five countries taught me adaptability, creativity, and
              strong collaboration in international teams. I’m passionate about
              building scalable, fast, and accessible web products with clean,
              user-centered design.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <Link href="/projects" className="btn btn-primary">
                View projects
              </Link>
              <a href="#contact" className=" btn btn-primary">
                Let’s talk
              </a>
              <a href="#resume" className="btn btn-primary">
                Jump to résumé
              </a>
            </div>
          </div>

          {/* Right rail — fun fact card */}
          <aside className="xl:col-span-4 xl:sticky xl:top-28">
            <div className="wave-card p-6 rounded-3xl border-marigold ">
              <h3 className="title text-2xl">Currently</h3>
              <p className="text-ink-800 font-semibold mt-4">
                Prototyping motion-rich UI patterns and tightening a component
                library.
              </p>
              <div className="mt-4 grid grid-rows-2 gap-3 text-sm">
                <div className="rounded-xl border border-marigold/60 p-3">
                  <div className="text-ink-800 font-semibold mb-2">Open to</div>
                  <div className="">Fullstack | Front End Development</div>
                </div>
                <div className="rounded-xl border border-marigold/60 p-3">
                  <div className="text-ink-800 font-semibold mb-2">
                    Location
                  </div>
                  <div className="">Ghent, Belgium | Remote</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* featured strip */}
      <section className="">
        <div className="wave-card rounded-3xl mt-20 px-6 py-4 flex items-center justify-between flex-wrap ">
          <p className="text-ink-700">
            Latest: migrated an ecommerce site from{" "}
            <span className="text-marigold font-semibold">
              Squarespace → WordPress
            </span>{" "}
            and polished a command palette.
          </p>
          <Link href="/projects" className="btn">
            Browse work →
          </Link>
        </div>
      </section>

      {/* WORK GRID — staggered & bold */}
      <section id="projects" className="section space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="title text-3xl text-ink-700 mt-10">
            Selected Projects
          </h2>
          <Link href="/projects" className="link-underline text-marigold">
            See all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {projects[0] && (
            <div className="lg:col-span-7">
              <div className="">
                <div className="rounded-2xl overflow-hidden border-marigold">
                  <ProjectCard project={projects[0]} />
                </div>
              </div>
            </div>
          )}

          {projects.slice(1, 3).map((p, i) => (
            <div key={i} className="lg:col-span-5">
              <div className="">
                <div className="rounded-2xl overflow-hidden border-blood">
                  <ProjectCard project={p} />
                </div>
              </div>
            </div>
          ))}

          {projects.slice(3).map((p, i) => (
            <div key={i} className="lg:col-span-7">
              <div className=""></div>
              <div className="rounded-2xl overflow-hidden border-blood">
                <ProjectCard project={p} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RÉSUMÉ SNAPSHOT */}
      <section id="resume" className="section space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="title text-3xl text-ink-700 mt-10">Résumé Snapshot</h2>
          <a
            href="/resume.pdf"
            className="btn"
            aria-label="Download résumé as PDF"
          >
            Download PDF
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education */}
          <div className="lg:col-span-4">
            <div className="wave-card rounded-3xl p-7 h-full">
              <h3 className="title text-2xl text-ink-700">Education</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <div className="font-semibold text-ink-700">
                    Graphic & Digital Media — Interactive Media Development
                  </div>
                  <div className="text-pearl-900">
                    Artevelde University of Applied Sciences — 2025
                  </div>
                </li>
                <li>
                  <div className="font-semibold text-ink-700">IB Diploma</div>
                  <div className="text-pearl-900">
                    United World College South East Asia (Dover, Singapore) —
                    2019
                  </div>
                </li>
              </ul>
              <div className="mt-6 text-xs text-pearl-900 italic">
                Focus: Web development, UX/UI, prototyping.
              </div>
            </div>
          </div>

          {/* Skills (wider) */}
          <div className="lg:col-span-4">
            <div className="wave-card rounded-3xl p-7 h-full">
              <h3 className="title text-2xl text-ink-700">Skills</h3>

              {/* Frontend */}
              <div className="mt-4 text-sm">
                <div className="text-marigold-500 mb-1 font-semibold mb-3">
                  Frontend
                </div>
                <ul className="text-pearl-900 space-y-1">
                  <li>
                    <span className="font-semibold">Languages:</span> HTML, CSS,
                    JavaScript, TypeScript
                  </li>
                  <li>
                    <span className="font-semibold">Frameworks:</span>{" "}
                    Bootstrap, Tailwind CSS, Next.js
                  </li>
                  <li>
                    <span className="font-semibold">Libraries:</span> React.js,
                    Vue.js, Lit
                  </li>
                  <li>
                    <span className="font-semibold">Tools:</span> Git, GitHub,
                    Webpack/Vite
                  </li>
                  <li>
                    <span className="font-semibold">Focus Areas:</span>{" "}
                    Responsive design, cross-browser compatibility,
                    accessibility (WCAG), API integration (REST/JSON)
                  </li>
                </ul>
              </div>

              <hr className="my-4 border-marigold/90" />

              {/* Backend */}
              <div className="text-sm">
                <div className="text-marigold-500 mb-3 font-semibold">
                  Backend
                </div>
                <ul className="text-pearl-900 space-y-1">
                  <li>
                    <span className="font-semibold">Languages:</span> JavaScript
                    (Node.js), PHP, Python, SQL
                  </li>
                  <li>
                    <span className="font-semibold">Frameworks:</span>{" "}
                    Express.js, Laravel
                  </li>
                  <li>
                    <span className="font-semibold">Libraries & Tools:</span>{" "}
                    Mongoose, Passport.js, Socket.io, Axios, JWT Authentication,
                    Docker
                  </li>
                </ul>
              </div>

              <hr className="my-4 border-marigold/90" />

              {/* Design */}
              <div className="text-sm">
                <div className="text-marigold-500 mb-3 font-semibold">
                  UX / UI
                </div>
                <ul className="text-pearl-900 space-y-1">
                  <li>
                    <span className="font-semibold">Tools:</span> Adobe XD,
                    Photoshop, Illustrator
                  </li>
                  <li>
                    <span className="font-semibold">Skills:</span> Wireframing,
                    prototyping, user-centered design
                  </li>
                </ul>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {[
                  "Human-centered design",
                  "Intuitive interfaces",
                  "Accessibility first",
                  "Micro-interactions",
                  "Design systems",
                  "Prototyping",
                  "Responsive layouts",
                ].map((b) => (
                  <span
                    key={b}
                    className="px-2.5 py-1 rounded-full border border-marigold/40 text-marigold/75"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience timeline */}
          <div className="lg:col-span-4">
            <div className="wave-card rounded-3xl p-7 h-full">
              <h3 className="title text-2xl text-ink-700">Experience</h3>
              <ol className="relative mt-8 border-l border-marigold/70 ps-8 space-y-6">
                <li className="relative">
                  <span className="absolute -left-4 top-1.5 h-2.5 w-2.5 rounded-full bg-marigold" />
                  <div className="text-sm">
                    <div className="font-semibold text-ink-700 mb-1">
                      Web Development Intern • Dirty Roots (Ecommerce)
                    </div>
                    <div className="text-marigold">
                      Berlin — Jan 2025 – Apr 2025
                    </div>
                    <p className="text-pearl-900 mt-1">
                      Redesigned the storefront and migrated the site from
                      Squarespace to WordPress for better scalability;
                      collaborated on UX improvements and feature roll-out.
                    </p>
                  </div>
                </li>

                <li className="relative">
                  <span className="absolute -left-4 top-1.5 h-2.5 w-2.5 rounded-full bg-marigold" />
                  <div className="text-sm">
                    <div className="font-semibold text-ink-700 mb-1">
                      Student Job • Goya
                    </div>
                    <div className="text-marigold">2024 – 2025</div>
                    <p className="text-pearl-900 mt-1">
                      Fast-paced teamwork, organization, and reliability under
                      pressure.
                    </p>
                  </div>
                </li>

                <li className="relative">
                  <span className="absolute -left-4 top-1.5 h-2.5 w-2.5 rounded-full bg-marigold" />
                  <div className="text-sm">
                    <div className="font-semibold text-ink-700 mb-1">
                      Shopworker • Delhaize
                    </div>
                    <div className="text-marigold">Summer 2014</div>
                    <p className="text-ink-900 mt-1">
                      Customer service and responsibility in a client-facing
                      role.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT — playful CTA */}
      <section id="contact" className="section pb-24 ">
        <div className="wave-card mt-10 p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <h3 className="title text-2xl text-ink-700">
              Let’s make something together.
            </h3>
            <p className="text-pearl-900 mt-2">
              Fastest reply via email. Happy to share more work or have a quick
              chat.
            </p>
          </div>
          <a
            href="mailto:charlotte.billiet25@gmail.com"
            className="btn btn-primary"
          >
            Email me
          </a>
        </div>
      </section>
    </main>
  );
}
