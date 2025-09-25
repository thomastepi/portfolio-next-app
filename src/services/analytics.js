import ReactGA from "react-ga4";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function loadGtag(gaId) {
  if (!gaId || typeof window === "undefined") return;
  if (window.dataLayer) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  // Consent Mode default
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });

  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(s);

  // Basic gtag init
  window.gtag("js", new Date());

  // Disable automatic page_view
  window.gtag("config", gaId, { send_page_view: false, anonymize_ip: true });
}

export function initializeAnalytics() {
  if (typeof window === "undefined") return;
  if (!GA_ID) {
    console.warn("GA4 Measurement ID is not defined");
    return;
  }

  loadGtag(GA_ID);

  // Initialize react-ga4 after gtag has been loaded
  ReactGA.initialize([
    {
      trackingId: GA_ID,
      gaOptions: { anonymizeIp: true },
      gtagOptions: {
        send_page_view: false,
        cookie_domain: "auto",
        cookie_flags: "SameSite=None; Secure",
        cookie_expires: 63072000,
      },
    },
  ]);

  if (process.env.NODE_ENV !== "production") {
    console.log("GA4 initialized with default Consent Mode");
  }
}

export function updateAnalyticsConsent(userConsent) {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("consent", "update", {
    analytics_storage: userConsent ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  if (userConsent) {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
    if (process.env.NODE_ENV !== "production")
      console.log("GA4: tracking enabled");
  } else {
    if (process.env.NODE_ENV !== "production")
      console.log("GA4: tracking disabled");
  }
}

// Helper to track pageviews on route change
const LOCALES = ["en", "fr"];

function normalizePath(input) {
  const u = input.startsWith("http")
    ? new URL(input)
    : new URL(input, window.location.origin);
  const parts = u.pathname.split("/").filter(Boolean);
  let lng;

  if (parts[0] && LOCALES.includes(parts[0])) {
    lng = parts.shift();
  }

  return {
    pagePath: "/" + parts.join("/") + (u.search || ""),
    language: lng,
  };
}

export function trackPageview(url, { keepLocale = false } = {}) {
  if (typeof window === "undefined") return;

  const { pagePath } = keepLocale ? { pagePath: url } : normalizePath(url);

  ReactGA.send({ hitType: "pageview", page: pagePath, title: document.title });
}
