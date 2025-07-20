"use client";
import React from "react";
import {
  Avatar,
  Heading,
  VStack,
  Center,
  useBreakpointValue,
  useColorMode,
  Text,
  Button,
} from "@chakra-ui/react";
import { useT } from "@/app/i18n/client";
import FullScreenSection from "../FullScreenSection/FullScreenSection";

const LandingSection = () => {
  const { t } = useT();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <FullScreenSection as="section" w="90%">
      <Center py="55px">
        <Heading
          size={useBreakpointValue({ base: "2xl", md: "4xl" })}
          align="center"
          mb="4"
        >
          {t("landing.greeting")}
        </Heading>
      </Center>
      <VStack spacing={6} px="10px">
        <Avatar
          size="2xl"
          name="Thomas"
          src="https://ik.imagekit.io/thormars/profile_photos/profile.jpg"
          borderRadius="full"
          shadow="xl"
        />
        <Text
          fontSize={useBreakpointValue({ base: "lg", md: "xl" })}
          fontWeight="bold"
          color={useColorMode().colorMode === "light" ? "gray.700" : "gray.300"}
          textAlign="center"
          maxW="700px"
        >
          {t("landing.title")} 🌱
        </Text>
        <Text
          fontSize={useBreakpointValue({ base: "lg", md: "xl" })}
          color={useColorMode().colorMode === "light" ? "gray.600" : "gray.400"}
          textAlign="center"
          maxW="600px"
        >
          {t("landing.subTitle")}{" "}
        </Text>

        <Button
          mt={4}
          colorScheme="teal"
          size="lg"
          onClick={handleClick("contactme")}
        >
          {t("landing.btnText")}
        </Button>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
