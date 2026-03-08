"use client";
import React, { useMemo, useState } from "react";
import FullScreenSection from "../FullScreenSection/FullScreenSection";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  useColorMode,
  Button,
  VStack,
} from "@chakra-ui/react";
import Card from "../Card/Card";
import TitleWrapper from "../layout/TitleWrapper/TitleWrapper";
import { useT } from "@/app/i18n/client";
import { projects } from "../../data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const MotionBox = motion(Box);
const INITIAL_VISIBLE_CARDS = 4;
//const TYPE_ORDER = ["studio", "clientWork", "openSource", "personalProject"];

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
  const { colorMode } = useColorMode();
  const { t } = useT("translation");
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const initialVisibleIds = useMemo(() => {
    const featuredProjects = projects.filter((project) => project.featured);
    const nonFeaturedProjects = projects.filter((project) => !project.featured);
    const selected = [
      ...featuredProjects.slice(0, INITIAL_VISIBLE_CARDS),
      ...nonFeaturedProjects,
    ].slice(0, INITIAL_VISIBLE_CARDS);

    return new Set(selected.map((project) => project.id));
  }, []);

  const hasMoreProjects = projects.length > INITIAL_VISIBLE_CARDS;

  const displayedProjects = useMemo(() => {
    if (showAll) return projects;

    return projects.filter((project) => initialVisibleIds.has(project.id));
  }, [showAll, initialVisibleIds]);

  return (
    <FullScreenSection as="section" w="90%" spacing={8} mt="6rem">
      <TitleWrapper my="5rem">
        <Heading id="projects-section">{t("projects.heading")}</Heading>
      </TitleWrapper>
      <VStack
        ref={ref}
        spacing={12}
        align="stretch"
        w={{ base: "100%", md: "90%" }}
      >
        <Box w="100%">
          <MotionBox
            as={Grid}
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={{ base: 5, md: 8 }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {displayedProjects.map((project) => (
              <MotionBox
                key={project.id}
                as={GridItem}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <Card
                  id={project.id}
                  title={t(project.title)}
                  category={t(`projects.types.${project.typeKey}`)}
                  description={t(project.description)}
                  longDescription={t(project.longDescription)}
                  features={t(project.features, { returnObjects: true })}
                  contributions={t(project.contributions, {
                    returnObjects: true,
                  })}
                  showContributions={project.showContributions}
                  meta={t(project.meta, { returnObjects: true })}
                  imageSrc={project.imageSrc}
                  carousel={project.carousel}
                  link={project.link}
                  github={project.github}
                  techStack={project.stack}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </MotionBox>
        </Box>

        {hasMoreProjects && (
          <Box w="100%">
            <Button
              onClick={() => setShowAll((prev) => !prev)}
              colorScheme="teal"
              variant="solid"
              borderRadius={0}
            >
              {showAll ? t("projects.showLess") : t("projects.showMore")}
            </Button>
          </Box>
        )}
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
