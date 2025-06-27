"use client";
import React, { useState } from "react";
import FullScreenSection from "../FullScreenSection/FullScreenSection";
import { Box, Heading, useColorMode, Button } from "@chakra-ui/react";
import Link from "next/link";
import Card from "../Card/Card";
import TitleWrapper from "../layout/TitleWrapper/TitleWrapper";
import { useT } from "@/app/i18n/client";
import { projects } from "../../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.5,
      duration: 0.8,
    },
  }),
};

const ProjectsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { colorMode } = useColorMode();
  const { t } = useT("translation");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <FullScreenSection as="section" w="90%" spacing={8} mt="6rem">
      <TitleWrapper my="5rem">
        <Heading id="projects-section">{t("projects.heading")}</Heading>
      </TitleWrapper>
      <MotionBox
        ref={ref}
        display="grid"
        css={{
          "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr",
            gridGap: 20,
          },
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gridGap: 50,
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, index) => (
          <MotionBox
            key={index}
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariants}
          >
            <Card
              title={t(project.title)}
              description={t(project.description)}
              imageSrc={project.imageSrc}
              link={project.link}
              github={project.github}
              techStack={project.stack}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
              colorMode={colorMode}
            />
          </MotionBox>
        ))}
        <Box textAlign="left" w="100%">
          <Button
            title="View More Projects on GitHub"
            as={Link}
            href="https://github.com/thomastepi?tab=repositories"
            target="_blank"
            colorScheme="teal"
            mt={8}
            variant="outline"
            borderRadius={0}
            _hover={{ textDecoration: "none" }}
          >
            {t("projects.MoreProjectsBtn")}
          </Button>
        </Box>
      </MotionBox>
    </FullScreenSection>
  );
};

export default ProjectsSection;
