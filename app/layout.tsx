import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Portfolio - Charlotte Billiet",
  description: "Projects, experience and contact links.",

  openGraph: {
    title: "Portfolio - Charlotte Billiet",
    description: "Projects, experience and contact links.",
    url: "https://charlottebilliet.com",
    type: "website",
  },
  metadataBase: new URL("https://charlottebilliet.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Charlotte Billiet",
    url: "https://charlottebilliet.com",
    jobTitle: "Frontend Developer",
    sameAs: [
      "https://www.linkedin.com/in/YOUR-LINKEDIN",
      "https://github.com/YOUR-GITHUB",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "UX/UI Design",
      "Accessibility",
      "Frontend Development",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-start justify-center min-h-[calc(100vh-4rem-4rem)] px-6 pb-16">
          <div className="w-full max-w-6xl">{children}</div>
        </main>
        <Footer />
      </body>

      <Analytics />
    </html>
  );
}
