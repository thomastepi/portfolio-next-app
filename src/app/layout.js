import React from "react";
import { Geist, Geist_Mono, Barlow } from "next/font/google";

export const metadata = {
  title: "Thomas Tepi – Web Developer",
  description:
    "Experienced web developer specializing in React.js and Node.js. Passionate about building user-friendly and accessible web applications.",
};

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable}`}
        suppressHydrationWarning
      >
        {children}
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
