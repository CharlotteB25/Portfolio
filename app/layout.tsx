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
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar /> {/* header is h-16 = 4rem */}
        {/* Make main fill the remaining viewport and center its children */}
        <main className="flex-1 flex items-start justify-center min-h-[calc(100vh-4rem-4rem)] px-6 pb-16">
          {/* ^ assumes header h-16 (4rem) and footer ~4rem */}
          <div className="w-full max-w-6xl">{children}</div>
        </main>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
