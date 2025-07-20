"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
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
import { motion } from "framer-motion";

const LandingSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useT();

  const headingSize = useBreakpointValue({ base: "2xl", md: "4xl" });
  const textFontSize = useBreakpointValue({ base: "lg", md: "xl" });
  const titleColor =
    useColorMode().colorMode === "light" ? "gray.700" : "gray.300";
  const subTitleColor =
    useColorMode().colorMode === "light" ? "gray.600" : "gray.400";

  const MotionBox = motion(Box);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  // this is to prevent quick flash of incorrect media query values
  // caused by the use of useBreakpointValue hook
  if (!isMounted) {
    return <FullScreenSection />;
  }

  return (
    <FullScreenSection as="section" w="90%">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Center py="55px">
          <Heading size={headingSize} align="center" mb="4">
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
            fontSize={textFontSize}
            fontWeight="bold"
            color={titleColor}
            textAlign="center"
            maxW="700px"
          >
            {t("landing.title")} 🌱
          </Text>
          <Text
            fontSize={textFontSize}
            color={subTitleColor}
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
      </MotionBox>
    </FullScreenSection>
  );
};

export default LandingSection;
