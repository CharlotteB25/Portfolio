"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const link = (href: string, label: string, onClick?: () => void) => (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "px-3 py-2 rounded-xl transition-colors border",
        pathname === href
          ? "bg-marigold text-ink border-marigold"
          : "hover:bg-marigold/20 border-marigold/40 text-marigold"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="w-full border-b border-marigold/80">
      {/* full-width row with ~20px side padding */}
      <div className="w-full h-16 flex items-center justify-between px-6 py-2">
        {/* LEFT: mono badge */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Charlotte Billiet"
        >
          <div className="h-14 w-14 rounded-full overflow-hidden ">
            <img
              src="/brand/CB-title-logo.png"
              alt="Charlotte Billiet monogram"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        {/* RIGHT: links (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <nav className="hidden sm:flex items-center gap-3">
            {link("/", "Home")}
            {link("/projects", "Projects")}
            {link("/contact", "Contact")}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={clsx(
              "sm:hidden inline-flex items-center justify-center rounded-xl p-2 transition-colors duration-200",
              "border-2 text-[rgb(var(--citrine)/0.6)] border-[rgb(var(--citrine)/0.6)]",
              "hover:bg-[rgb(var(--citrine)/0.3)] hover:text-[rgb(var(--citrine/0.8))]",
              "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--citrine)/0.4)]",
              open && "bg-[rgb(var(--citrine)/0.6)] text-[rgb(var(--ink))]"
            )}
          >
            {!open ? (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={clsx("sm:hidden", { hidden: !open })}>
        {/* Dim background */}
        <div
          className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        {/* Panel pinned 20px from edges */}
        <div
          className={clsx(
            "absolute top-16 inset-x-5 z-50 rounded-2xl overflow-hidden",
            "transition-transform duration-200",
            open ? "translate-y-0" : "-translate-y-4"
          )}
        >
          <div className="wave-card p-4">
            <div className="flex flex-col gap-2 text-center">
              {link("/", "Home", () => setOpen(false))}
              {link("/projects", "Projects", () => setOpen(false))}
              {link("/contact", "Contact", () => setOpen(false))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
