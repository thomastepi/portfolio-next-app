"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  IconButton,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FullScreenSection from "@/components/FullScreenSection/FullScreenSection";
import TitleWrapper from "@/components/layout/TitleWrapper/TitleWrapper";
import { useT } from "@/app/i18n/client";
import articles from "@/data/articles";

const MotionBox = motion(Box);

const articleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const HighlightedArticles = () => {
  const { t } = useT("translation");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const cardBg = useColorModeValue("gray.200", "gray.700");

  return (
    <FullScreenSection w="90%" spacing={8} mt="6rem">
      <TitleWrapper my="5rem">
        <Heading id="articles-section">{t("articles.heading")}</Heading>
      </TitleWrapper>

      <MotionBox
        ref={ref}
        display="grid"
        w={{ base: "100%", md: "70%" }}
        css={{
          "@media (max-width: 768px)": {
            gridTemplateColumns: "1fr",
            gridGap: 20,
          },
          gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
          gridGap: 40,
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {articles.map((article, index) => (
          <MotionBox
            key={index}
            p={6}
            bg={cardBg}
            borderRadius="xl"
            shadow="md"
            custom={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={articleVariants}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="start"
            >
              <Box>
                <Heading size="md" mb={2}>
                  {t(article.title)}
                </Heading>
                <Text fontSize="sm" color="gray.500" mb={3}>
                  {t(article.date)}
                </Text>
                <Text fontSize="md" mb={4}>
                  {t(article.description)}
                </Text>
              </Box>
              <ChakraLink href={article.url} isExternal>
                <IconButton
                  aria-label="Read article"
                  icon={<ExternalLinkIcon />}
                  variant="ghost"
                  colorScheme="teal"
                  size="sm"
                />
              </ChakraLink>
            </Box>
          </MotionBox>
        ))}
      </MotionBox>
    </FullScreenSection>
  );
};

export default HighlightedArticles;
