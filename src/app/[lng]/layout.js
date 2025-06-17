import React from "react";
import { Geist, Geist_Mono, Barlow } from "next/font/google";
import "@/app/globals.css";
import { AnalyticsManager } from "@/components/AnalyticsManager/AnalyticsManager";
import { Providers } from "@/components/Providers/Providers";
import { languages } from "@/app/i18n/settings";
import { getT } from "@/app/i18n";
import Layout from "@/components/layout/Layout";
import Script from "next/script";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata() {
  const { t } = await getT("translation", { keyPrefix: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://www.thomastepi.com"),
    keywords: [
      "Thomas Tepi",
      "web developer",
      "portfolio",
      "React.js",
      "Node.js",
      "full stack developer",
      "projects",
    ],
    authors: [{ name: "Thomas Tepi", url: "https://www.thomastepi.com" }],
    robots: "index, follow",
    openGraph: {
      title: "Thomas Tepi - Web Developer Portfolio",
      description:
        "Showcasing the web development projects and skills of Thomas Tepi, specializing in React.js and Node.js.",
      url: "https://www.thomastepi.com",
      type: "website",
      images: [
        {
          url: "https://ik.imagekit.io/thormars/profile_photos/cowansville_beach.jpg",
          width: 1200,
          height: 630,
          alt: "Thomas Tepi Portfolio",
        },
      ],
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable}`}
      >
        <Providers>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
        send_page_view: false
      });
    `}
          </Script>
          <Layout>{children}</Layout>
          <AnalyticsManager />
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Thomas Tepi",
              jobTitle: "Web Developer",
              url: "https://www.thomastepi.com",
              sameAs: [
                "https://github.com/thomastepi",
                "https://linkedin.com/in/thomastepi",
                "https://x.com/TomTepi",
              ],
              description:
                "Experienced web developer specializing in React.js and Node.js. Passionate about building user-friendly and accessible web applications.",
              image:
                "https://ik.imagekit.io/thormars/profile_photos/cowansville_beach.jpg",
              email: "mailto:contact@thomastepi.com",
              worksFor: {
                "@type": "Organization",
                name: "Thomas Tepi Portfolio",
                url: "https://www.thomastepi.com",
              },
              hasPart: [
                {
                  "@type": "WebSite",
                  name: "ResumeCraft - AI Resume Builder",
                  url: "https://resumecraft.thomastepi.com",
                },
                {
                  "@type": "WebSite",
                  name: "Sawyer Camp Farmers CIG",
                  url: "https://sawyercamp.thomastepi.com",
                },
                {
                  "@type": "WebSite",
                  name: "Annette's Beauty & Salon",
                  url: "https://annette.thomastepi.com",
                },
                {
                  "@type": "WebSite",
                  name: "Bookstore Inventory Management",
                  url: "https://bookmart.thomastepi.com",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
