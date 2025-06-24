"use client";
import { useEffect, useState } from "react";
import {
  initializeAnalytics,
  updateAnalyticsConsent,
} from "@/config/analytics";
import CookieConsentComponent from "@/components/CookieConsentComponent/CookieConsentComponent";

export function AnalyticsManager() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consentGiven = document.cookie.includes("CookieConsent=true");
    setAnalyticsEnabled(consentGiven);
    initializeAnalytics();
  }, []);

  useEffect(() => {
    if (analyticsEnabled !== null) {
      updateAnalyticsConsent(analyticsEnabled);
    }
  }, [analyticsEnabled]);

  return <CookieConsentComponent setAnalyticsEnabled={setAnalyticsEnabled} />;
}
