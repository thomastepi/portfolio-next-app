import React from "react";
import { getT } from "@/app/i18n";

export async function generateMetadata({ params }) {
  const { lng } = await params;
  const { t } = await getT("translation", { keyPrefix: "privacyPolicy.metadata" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `https://www.thomastepi.com/${lng}/privacy-policy`,
      siteName: "Thomas Tepi Portfolio",
      type: "website",
    },
    robots: "index, follow",
  };
}

export default function PrivacyPolicyLayout({ children }) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
