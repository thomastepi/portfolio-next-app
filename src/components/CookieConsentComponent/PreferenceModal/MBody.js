import { VStack, FormControl, FormLabel, Switch, Text } from "@chakra-ui/react";

function MBody({ setAnalyticsConsent, analyticsConsent, isDarkMode, t }) {
  return (
    <VStack align="start" spacing={4}>
      <div>
        <FormControl display="flex" alignItems="center" isDisabled>
          <FormLabel htmlFor="essential-switch" mb="0">
            {t("preferencesModal.essentialLabel")}
          </FormLabel>
          <Switch
            id="essential-switch"
            colorScheme="teal"
            isChecked
            isReadOnly
          />
        </FormControl>
        <Text fontSize="sm" color={isDarkMode ? "gray.300" : "gray.600"}>
          {t("preferencesModal.essentialDescription")}
        </Text>
      </div>

      <div>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="analytics-switch" mb="0">
            {t("preferencesModal.analyticsLabel")}
          </FormLabel>
          <Switch
            id="analytics-switch"
            isChecked={analyticsConsent}
            colorScheme="teal"
            onChange={(e) => setAnalyticsConsent(e.target.checked)}
          />
        </FormControl>
        <Text fontSize="sm" color={isDarkMode ? "gray.300" : "gray.600"}>
          {t("preferencesModal.analyticsDescription")}
        </Text>
      </div>
    </VStack>
  );
}

export default MBody;
