"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  initializeAnalytics,
  updateAnalyticsConsent,
  trackPageview,
} from "@/services/analytics";
import CookieConsentComponent from "@/components/CookieConsentComponent/CookieConsentComponent";

function getCookie(name) {
  return document.cookie
    .split(";")
    .map((v) => v.trim())
    .find((v) => v.startsWith(name + "="))
    ?.split("=")[1];
}

function isAnalyticsEnabledFromCookie() {
  const v = getCookie("CookieConsent");
  return v === "true";
}

export function AnalyticsManager() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(() =>
    typeof window !== "undefined" ? isAnalyticsEnabledFromCookie() : false
  );

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstPageviewSentRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__ga_initialized) return;

    initializeAnalytics();
    window.__ga_initialized = true;
  }, []);

  // Push consent state to GA whenever it changes
  useEffect(() => {
    updateAnalyticsConsent(analyticsEnabled);
    if (analyticsEnabled && !firstPageviewSentRef.current) {
      const url =
        pathname + (searchParams?.toString() ? `?${searchParams}` : "");
      trackPageview(url);
      firstPageviewSentRef.current = true;
    }
  }, [analyticsEnabled, pathname, searchParams]);

  // Track client side route changes if consent was given
  useEffect(() => {
    if (!analyticsEnabled) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    trackPageview(url);
  }, [analyticsEnabled, pathname, searchParams]);

  return <CookieConsentComponent setAnalyticsEnabled={setAnalyticsEnabled} />;
}
