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
      2500,
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="space-y-10 sm:space-y-10 mt-10">
      {/* HERO — billboard with playful accents
      ch - css length unit for text layout, linked to the typography and not the pixels or percentages best for this section
      ch keeps the text animation smooth by reserving space equal to about 6-7 characters
      relative isolate is a positioning context that allows absolutely positioned elements to be placed relative to their nearest positioned ancestor.
      */}
      {/*       fix mobile overflow issue!!!
       */}{" "}
      <section className="section relative isolate">
        <div className="flex flex-col xl:flex-row xl:items-start xl:gap-10">
          {/* LEFT — Hero text */}
          <div className="flex-1 text-center xl:text-left">
            <h1
              className="
          title text-ink-700
          leading-[1.1]
          text-[clamp(3.25rem,10vw,5.6rem)]
          max-w-[18ch] sm:max-w-[14ch]
        "
            >
              I design & build{" "}
              <span className="relative inline-block min-w-[6ch]">
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

            <p className="text-ink-700 text-lg max-w-2xl pt-6 leading-relaxed">
              Hi, I’m Charlotte, a recent graduate in fullstack development with
              experience in frontend design and backend development. Growing up
              across five countries taught me adaptability, creativity, and
              strong collaboration in international teams. I’m passionate about
              building scalable, fast, and accessible web products with clean,
              user-centered design.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 justify-center xl:justify-start">
              <Link href="/projects" className="btn btn-primary">
                View projects
              </Link>
              <a href="#contact" className="btn btn-primary">
                Let’s talk
              </a>
              <a href="#resume" className="btn btn-primary">
                Jump to résumé
              </a>
            </div>
          </div>

          {/* RIGHT — Fun fact card */}
          <aside className="xl:w-[30%] mt-10 xl:mt-0 xl:sticky xl:top-28">
            <div className="wave-card p-6 rounded-3xl">
              <p className="text-ink-800 font-semibold">
                Currently open to exciting opportunities in web development and
                refining my UI and design craft.
              </p>
              <div className="mt-4 grid grid-rows-2 gap-3 text-sm">
                <div className="rounded-xl border border-marigold/60 p-3">
                  <div className="text-ink-800 font-semibold mb-2">Open to</div>
                  <div>Fullstack | Front End Development</div>
                </div>
                <div className="rounded-xl border border-marigold/60 p-3">
                  <div className="text-ink-800 font-semibold mb-2">
                    Location
                  </div>
                  <div>Ghent, Belgium | Remote</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      {/* featured strip */}
      <section>
        <div
          className="
      wave-card rounded-3xl mt-20
      px-8 py-8 sm:px-10 sm:py-6
      flex flex-col sm:flex-row
      items-center sm:items-center
      justify-center sm:justify-between
      text-center sm:text-left
      gap-5
    "
        >
          <p className="text-ink-700 text-base sm:text-[1rem] leading-relaxed">
            Latest: migrated an ecommerce site from{" "}
            <span className="text-marigold font-semibold">
              Squarespace → WordPress
            </span>{" "}
            and polished a command palette.
          </p>

          <Link
            href="/projects"
            className="
        btn mt-2 sm:mt-0
        self-center sm:self-auto
      "
          >
            Browse work →
          </Link>
        </div>
      </section>
      {/* WORK GRID — staggered & bold */}
      <section id="projects" className="section space-y-8">
        <div
          className="
      flex flex-col sm:flex-row
      items-start sm:items-end
      justify-between
      gap-3 sm:gap-0
    "
        >
          <h2 className=" text-3xl text-ink-700 mt-10">Selected Projects</h2>
          <Link
            href="/projects"
            className="
        inline-flex items-center justify-center
         sm:px-5 sm:py-2.5
         sm:text-base
          btn btn-ghost
      "
          >
            See all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Show only the first 4 projects */}
          {projects.slice(0, 4).map((project, i) => (
            <div
              key={i}
              className={
                i === 0
                  ? "lg:col-span-7"
                  : i === 1
                    ? "lg:col-span-5"
                    : i === 2
                      ? "lg:col-span-5"
                      : "lg:col-span-7"
              }
            >
              <div className="rounded-2xl overflow-hidden border-marigold">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* RÉSUMÉ SNAPSHOT */}
      <section id="resume" className="section space-y-8">
        <div className="flex items-end justify-between">
          <h2 className=" text-3xl text-ink-700 mt-10">Résumé Snapshot</h2>
          <a
            href="/CV/Resume-CharlotteBilliet_developer.pdf"
            className="btn btn-ghost btn-sm"
            aria-label="Download résumé as PDF"
          >
            Download PDF
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education */}
          <div className="lg:col-span-4">
            <div className="wave-card rounded-3xl p-7 h-full">
              <h3 className=" text-2xl text-ink-700">Education</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <div className=" text-marigold-500 mb-1">
                    Graphic & Digital Media — Interactive Media Development
                  </div>
                  <div className="text-pearl-900">
                    Artevelde University of Applied Sciences — 2025
                  </div>
                </li>
                <li>
                  <div className=" text-marigold-500 mb-1">IB Diploma</div>
                  <div className="text-pearl-900">
                    United World College South East Asia (Dover, Singapore) —
                    2019
                  </div>
                </li>
              </ul>
              <div className="mt-6 text-xs text-pearl-900 italic">
                Focus: Fullstack development, UX/UI design, project management,
                Frontend development.
              </div>
            </div>
          </div>

          {/* Skills (wider) */}
          <div className="lg:col-span-4">
            <div className="wave-card rounded-3xl p-7 h-full">
              <h3 className=" text-2xl text-ink-700">Skills</h3>

              {/* Frontend */}
              <div className="mt-4 text-sm">
                <div className="text-marigold-500 mb-1 mb-3">Frontend</div>
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
                <div className="text-marigold-500 mb-3 ">Backend</div>
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
                <div className="text-marigold-500 mb-3 ">UX / UI</div>
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
            </div>
          </div>

          {/* Experience timeline */}
          <div className="lg:col-span-4">
            <div className="wave-card rounded-3xl p-7 h-full">
              <h3 className=" text-2xl text-ink-700">Experience</h3>
              <ol className="relative mt-8 border-l border-marigold/70 ps-8 space-y-6">
                <li className="relative">
                  <span className="absolute -left-4 top-1.5 h-2.5 w-2.5 rounded-full bg-marigold" />
                  <div className="text-sm">
                    <div className="font-semibold text-ink-700 mb-1">
                      Content Creator • Leie Auto's
                    </div>
                    <div className="text-marigold">Dec 2025 - Present</div>
                    <p className="text-ink-900 mt-1">
                      Creating engaging social media content to enhance brand
                      presence and connect with the audience.
                    </p>
                  </div>
                </li>
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
      <section id="contact" className="section pb-20 ">
        <div
          className="wave-card mt-10 p-6 sm:p-8 rounded-3xl 
  flex flex-col sm:flex-row 
  items-center sm:items-center 
  justify-center sm:justify-between 
  text-center sm:text-left 
  gap-5"
        >
          {" "}
          <div>
            <h3 className=" text-2xl text-ink-700">
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
