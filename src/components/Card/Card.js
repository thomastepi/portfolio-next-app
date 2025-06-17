"use client";
import React from "react";
import {
  Heading,
  Image,
  Text,
  VStack,
  Link,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useT } from "@/app/i18n/client";

const MotionVStack = motion(VStack);

const Card = ({
  title,
  description,
  imageSrc,
  link,
  github,
  techStack,
  isExpanded,
  setIsExpanded,
  colorMode,
}) => {
  const { t } = useT("translation");

  const truncatedDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  return (
    <MotionVStack
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      spacing={4}
      alignItems="flex-start"
      bg={colorMode === "light" ? "gray.200" : "gray.700"}
      borderRadius="md"
      boxShadow="md"
      _hover={{
        boxShadow: "xl",
      }}
      overflow="hidden"
      w="100%"
      maxW="md"
      minH="420px"
    >
      <Image
        src={imageSrc}
        alt={`Preview of the ${title} project`}
        width="100%"
        height="180px"
        objectFit="cover"
      />
      <VStack padding="4" alignItems="flex-start" spacing={3}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{isExpanded ? description : truncatedDescription}</Text>
        {description.length > 100 && (
          <Button
            size="sm"
            variant="link"
            colorScheme="teal"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? t("card.isExpanded") : t("card.isCollapsed")}
          </Button>
        )}

        {techStack && techStack.length > 0 && (
          <VStack align="flex-start" spacing={1}>
            <HStack flexWrap="wrap" spacing={2}>
              {techStack.map((tech, index) => (
                <Text
                  key={index}
                  fontSize="sm"
                  color={colorMode === "light" ? "teal.800" : "whiteAlpha.700"}
                  paddingRight={2}
                  py={1}
                  fontWeight="bold"
                >
                  {tech}
                </Text>
              ))}
            </HStack>
          </VStack>
        )}

        <HStack gap={4} py={2}>
          {github && (
            <Link
              className="card-links github-link"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="github-icon"
                icon={faGithub}
                size="lg"
              />{" "}
              {t("card.githubTooltip")}
            </Link>
          )}
          {link && (
            <Link
              className="card-links live-demo-link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="globe-icon"
                icon={faGlobe}
                size="lg"
              />{" "}
              {t("card.websiteTooltip")}
            </Link>
          )}
        </HStack>
      </VStack>
    </MotionVStack>
  );
};

export default Card;
