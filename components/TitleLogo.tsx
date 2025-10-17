// components/TitleWordmarkText.tsx
import Link from "next/link";

export default function TitleWordmarkText() {
  return (
    <Link
      href="/"
      aria-label="Charlotte Billiet — Home"
      className="relative inline-block"
    >
      <span className="title block leading-none text-[clamp(1.25rem,3.5vw,2rem)] tracking-tight">
        <span className="text-ink">Charlotte</span>{" "}
        <span className="text-police">Billiet</span>
      </span>

      {/* wavy accent */}
      <svg
        viewBox="0 0 300 26"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute left-0 right-0 -bottom-1 h-[0.55em] pointer-events-none"
      >
        <defs>
          <linearGradient id="tw-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#E59D2C" />
            <stop offset="1" stopColor="#2E4365" />
          </linearGradient>
        </defs>
        <path
          d="M2 16 C 60 4, 120 22, 178 8 S 298 18, 298 12"
          fill="none"
          stroke="url(#tw-grad)"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>

      {/* tiny star pop */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        aria-hidden="true"
        className="inline-block translate-y-[-0.15em] ms-2"
      >
        <path
          d="M10 0l2.2 4.4 4.9.7-3.5 3.4.8 4.8L10 11.6 5.6 13.3l.8-4.8L2.9 5.1l4.9-.7L10 0z"
          fill="#2E4365"
          opacity=".85"
        />
      </svg>
    </Link>
  );
}
