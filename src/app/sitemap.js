import { languages } from "./i18n/settings";

const baseUrl = "https://www.thomastepi.com";

export default function sitemap() {
  // Pages with language-specific versions
  const pages = ["", "/privacy-policy"];

  // URLs for each language
  const pageUrls = languages.flatMap((lang) =>
    pages.map((page) => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: page === "" ? 0.9 : 0.3,
    }))
  );

  // Subdomain projects
  const projectUrls = [
    { url: "https://resumecraft.thomastepi.com/", priority: 0.8 },
    { url: "https://annette.thomastepi.com/", priority: 0.8 },
    { url: "https://guidefox.thomastepi.com/", priority: 0.8 },
  ].map((proj) => ({
    ...proj,
    lastModified: new Date(),
    changeFrequency: "yearly",
  }));

  // Root URL, used as a canonical base
  const rootUrl = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1.0,
  };

  return [rootUrl, ...pageUrls, ...projectUrls];
}
