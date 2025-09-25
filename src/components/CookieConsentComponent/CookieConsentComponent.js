"use client";
import { useState, useEffect } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { updateAnalyticsConsent } from "../../services/analytics";
import { useT } from "@/app/i18n/client";
import { Button, useDisclosure, useColorMode } from "@chakra-ui/react";
import PreferenceModal from "./PreferenceModal/PreferenceModal";
import { useRouter, usePathname } from "next/navigation";
import styles from "./CookieConsentComponent.module.css";

const CookieConsentComponent = ({ setAnalyticsEnabled }) => {
  const [consentVisible, setConsentVisible] = useState("hidden");
  const router = useRouter();
  const { t } = useT("translation");
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pathname = usePathname();

  function handleAccept() {
    setAnalyticsEnabled(true);
    updateAnalyticsConsent(true);
    Cookies.set("CookieConsent", true, { expires: 90 });
    setConsentVisible("hidden");
  }

  function handleDecline() {
    setAnalyticsEnabled(false);
    updateAnalyticsConsent(false);
    Cookies.set("CookieConsent", false, { expires: 90 });
    setConsentVisible("hidden");
  }

  useEffect(() => {
    const cookieConsent = Cookies.get("CookieConsent");

    if (cookieConsent === "true") {
      setConsentVisible("hidden");
      setAnalyticsEnabled(true);
      return;
    }

    if (cookieConsent === "false") {
      setConsentVisible("hidden");
      setAnalyticsEnabled(false);
      return;
    }

    setConsentVisible("show");

    const handleUserInteraction = () => {
      if (!/^\/(en|fr)$/.test(pathname)) return; // ensure interaction only on home page
      setAnalyticsEnabled(true);
      updateAnalyticsConsent(true);
      Cookies.set("CookieConsent", true, { expires: 90 });
      setConsentVisible("hidden");

      window.removeEventListener("scroll", handleScroll);
    };

    const handleScroll = () => {
      const scrolled =
        (window.scrollY + window.innerHeight) / document.body.scrollHeight;

      if (scrolled > 0.5) {
        handleUserInteraction();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [consentVisible, pathname]);

  return (
    <>
      <PreferenceModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        setAnalyticsEnabled={setAnalyticsEnabled}
        handleAccept={handleAccept}
        handleDecline={handleDecline}
        setConsentVisible={setConsentVisible}
      />
      <CookieConsent
        contentClasses={styles.cookieConsentContent}
        location="bottom"
        visible={consentVisible}
        cookieName="CookieConsent"
        expires={90}
        style={{
          background: isDarkMode ? "#F7FAFC" : "#2C2F33",
          color: isDarkMode ? "#2C2F33" : "#F7FAFC",
          fontSize: "14px",
          padding: "5px",
          zIndex: 1000,
          alignItems: "center",
        }}
        buttonStyle={{
          display: "none",
        }}
      >
        <div>
          {t("consent.message")}{" "}
          <span style={{ fontSize: "14px" }}>
            {t("consent.span")}{" "}
            <Button
              variant="link"
              color={isDarkMode ? "teal.400" : "teal.200"}
              onClick={() => router.push("/privacy-policy")}
              fontSize="12px"
            >
              {t("consent.policyButtonText")}
            </Button>
          </span>
        </div>
        <div className={styles.btnContainer}>
          <Button
            variant="outline"
            color={isDarkMode ? "teal.400" : "teal.200"}
            fontSize="14px"
            borderColor={isDarkMode ? "teal.400" : "teal.200"}
            _hover={{ bg: isDarkMode ? "#F5F7F8" : "#3D3D3D" }}
            onClick={onOpen}
            aria-label="Modify cookie preferences"
          >
            {t("consent.preferenceBtn")}
          </Button>
          <Button
            variant="solid"
            colorScheme="teal"
            fontSize="14px"
            onClick={() => handleAccept()}
            aria-label="Accept all cookies"
          >
            {t("consent.acceptBtn")}
          </Button>
        </div>
      </CookieConsent>
    </>
  );
};

export default CookieConsentComponent;
