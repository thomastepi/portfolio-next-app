"use client";
import React, { useState } from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import ModalComponent from "../../ModalComponent/ModalComponent";
import MBody from "./MBody";
import { useT } from "@/app/i18n/client";

const PreferenceModal = ({
  isOpen,
  onClose,
  setAnalyticsEnabled,
  handleAccept,
  handleDecline,
  setConsentVisible,
}) => {
  const [analyticsConsent, setAnalyticsConsent] = useState(true);
  const { t } = useT("translation");
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";

  const handleSavePreferences = () => {
    setAnalyticsEnabled(analyticsConsent);
    if (analyticsConsent) {
      handleAccept();
    } else {
      handleDecline();
    }
    setConsentVisible("hidden");
    onClose();
  };

  return (
    <ModalComponent
      isOpen={isOpen}
      onClose={onClose}
      title={t("preferencesModal.title")}
      body={
        <MBody
          setAnalyticsConsent={setAnalyticsConsent}
          analyticsConsent={analyticsConsent}
          isDarkMode={isDarkMode}
          t={t}
        />
      }
      footer={
        <Button
          variant="solid"
          colorScheme="teal"
          onClick={handleSavePreferences}
        >
          {t("preferencesModal.saveButton")}
        </Button>
      }
      zIndex="2000"
      isCentered
    />
  );
};

export default PreferenceModal;
