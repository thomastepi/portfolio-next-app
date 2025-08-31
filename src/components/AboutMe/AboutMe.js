"use client";
import React from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import TitleWrapper from "../layout/TitleWrapper/TitleWrapper";
import TechStackSection from "../TechStackSection/TechStackSection";
import { motion } from "framer-motion";
import FullScreenSection from "../FullScreenSection/FullScreenSection";
import { useT } from "@/app/i18n/client";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const AboutMe = () => {
  const { t } = useT("translation");

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <FullScreenSection as="section" w="90%" my="6rem">
      <TitleWrapper my="6rem">
        <MotionHeading
          id="about-me-section"
          as="h2"
          size="xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {t("aboutMe.heading")}
        </MotionHeading>
      </TitleWrapper>
      <Box
        spacing={8}
        maxW="1200px"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={9}
          alignItems="stretch"
        >
          <GridItem>
            <Image
              src="https://ik.imagekit.io/thormars/portfolio/selfie.jpg"
              alt="Thomas Tepi"
              borderRadius="5px"
              width="100%"
              height="100%"
              maxH="500px"
              objectFit="cover"
              boxShadow="lg"
            />
          </GridItem>

          <GridItem>
            <VStack spacing={4} align="flex-start" h="100%">
              <MotionText textAlign="justify" lineHeight="1.8" variants={item}>
                {t("aboutMe.paragraph1")}
              </MotionText>
              <MotionText textAlign="justify" lineHeight="1.8" variants={item}>
                {t("aboutMe.paragraph2")}
              </MotionText>
              <MotionText textAlign="justify" lineHeight="1.8" variants={item}>
                {t("aboutMe.paragraph3")}
              </MotionText>
              <Box mt="auto">
                {" "}
                <TechStackSection />
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Box>
    </FullScreenSection>
  );
};

export default AboutMe;
