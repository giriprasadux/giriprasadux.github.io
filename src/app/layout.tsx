import type { Metadata, Viewport } from "next";
import { Karla, Kode_Mono, Syne } from "next/font/google";
import "./globals.css";

// "optional" never swaps mid-view, so a cold load cannot shift the layout.
const display = Syne({ variable: "--font-syne", subsets: ["latin"], display: "optional" });
const body = Karla({ variable: "--font-karla", subsets: ["latin"], display: "optional" });
const mono = Kode_Mono({ variable: "--font-kode", subsets: ["latin"], display: "optional" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://giriprasadux.github.io"),
  title: "Giri Prasad | Senior Product Designer",
  description:
    "Senior Product Designer with 8 years across B2B SaaS, enterprise modernization and gaming. Turns complex legacy workflows into intuitive 0→1 products and design systems.",
};

export const viewport: Viewport = { themeColor: "#f9f8f5" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Reveal styles apply only when JS runs, and drop off if hydration never happens. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'var d=document.documentElement;d.classList.add("js");setTimeout(function(){window.__revealReady||d.classList.remove("js")},4000)',
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
