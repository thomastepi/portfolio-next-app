import React from "react";
import "@/app/globals.css";
import { AnalyticsManager } from "@/components/AnalyticsManager/AnalyticsManager";
import { Providers } from "@/components/Providers/Providers";
import { languages } from "@/app/i18n/settings";
import { getT } from "@/app/i18n";
import Layout from "@/components/layout/Layout";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export async function generateMetadata() {
  const { t } = await getT("translation", { keyPrefix: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL("https://thomastepi.com"),
    keywords: [
      "Thomas Tepi",
      "web developer",
      "portfolio",
      "React.js",
      "Node.js",
      "full stack developer",
      "projects",
    ],
    authors: [{ name: "Thomas Tepi", url: "https://thomastepi.com" }],
    robots: "index, follow",
    openGraph: {
      title: "Thomas Tepi - Web Developer Portfolio",
      description:
        "Showcasing the web development projects and skills of Thomas Tepi, specializing in React.js and Node.js.",
      url: "https://thomastepi.com",
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

export default function MainLayout({ children }) {
  return (
    <Providers>
      <Layout>{children}</Layout>
      <AnalyticsManager />
    </Providers>
  );
}
