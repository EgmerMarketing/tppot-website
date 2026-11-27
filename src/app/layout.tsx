import type { Metadata, Viewport } from "next";
import { Lato, Lora } from "next/font/google";
import { MotionConfig } from "motion/react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import { BASE_URL, organizationSchema, personSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | The Postpartum OT",
    default: "Postpartum Support for New Moms and Dads | The Postpartum OT",
  },
  description:
    "Postpartum support for new moms and dads from occupational therapist Melissa O'Neal, OTR/L: sleep, feeding, recovery and daily life with a newborn.",
  openGraph: { siteName: "The Postpartum OT", type: "website", locale: "en_US" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

// Zoom stays allowed: no maximumScale or userScalable here.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7fafa" },
    { media: "(prefers-color-scheme: dark)", color: "#061726" },
  ],
};

// Runs before paint so the saved or system theme is applied with no flash.
const themeScript = `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

const jsonLd = [organizationSchema(), personSchema(), websiteSchema()];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lato.variable} ${lora.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        <div className="grain" aria-hidden="true" />
        <a
          href="#main"
          className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70]"
        >
          Skip to content
        </a>
        <MotionConfig reducedMotion="user">
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
