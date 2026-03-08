"use client";
import React from "react";
import {
  Heading,
  Box,
  Image,
  Text,
  VStack,
  Link,
  HStack,
  Button,
  useDisclosure,
  Tag,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import ModalComponent from "../ModalComponent/ModalComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useT } from "@/app/i18n/client";

import Carousel from "../Carousel/Carousel";

const MotionVStack = motion(VStack);

const Card = ({
  title,
  category,
  description,
  longDescription,
  features,
  contributions,
  meta,
  // tech,
  imageSrc,
  carousel,
  link,
  github,
  techStack,
  colorMode,
  showContributions = false,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useT("translation");

  return (
    <MotionVStack
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      spacing={4}
      alignItems="flex-start"
      bg={colorMode === "light" ? "white" : "gray.800"}
      borderRadius="md"
      borderWidth="1px"
      borderColor={colorMode === "light" ? "gray.200" : "whiteAlpha.200"}
      boxShadow="sm"
      _hover={{
        boxShadow: "xl",
      }}
      overflow="hidden"
      w="100%"
      maxW="100%"
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
        <Tag
          size="sm"
          colorScheme="teal"
          variant={colorMode === "light" ? "subtle" : "solid"}
        >
          {category}
        </Tag>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text noOfLines={4}>{description}</Text>
        {description.length > 100 && (
          <Button size="sm" variant="link" colorScheme="teal" onClick={onOpen}>
            {t("card.LearnMore")}
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
      <ModalComponent
        isOpen={isOpen}
        onClose={onClose}
        title={title}
        body={
          <VStack align="start" spacing={4}>
            {carousel && carousel.length > 0 ? (
              <Carousel carousel={carousel} />
            ) : (
              <Image src={imageSrc} alt={title} borderRadius="md" />
            )}
            <Text whiteSpace="pre-wrap">{longDescription}</Text>
            {features && features.length > 0 && (
              <Box w="100%">
                <Text fontWeight="bold" mb={2}>
                  {t("card.modal.features")}
                </Text>
                <List spacing={2}>
                  {features.map((f, i) => (
                    <ListItem key={i}>
                      <ListIcon as={CheckCircleIcon} color="teal.500" />
                      {f}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            {showContributions && contributions && contributions.length > 0 && (
              <Box w="100%">
                <Text fontWeight="bold" mb={2}>
                  {t("card.modal.contributions")}
                </Text>
                <List spacing={2}>
                  {contributions.map((c, i) => (
                    <ListItem key={i}>
                      <ListIcon as={CheckCircleIcon} color="purple.500" />
                      {c}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            {techStack && techStack.length > 0 && (
              <Box w="100%">
                <Text fontWeight="bold" mb={2}>
                  {t("card.modal.techStack")}
                </Text>
                <HStack wrap="wrap" spacing={2}>
                  {techStack.map((t, i) => (
                    <Tag key={i} size="md" colorScheme="gray" variant="subtle">
                      {t}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            )}

            {meta && (
              <Box w="100%">
                <Text fontWeight="bold" mb={2}>
                  {t("card.modal.meta")}
                </Text>
                <List spacing={1}>
                  <ListItem>
                    {t("card.modal.year")}: {meta.year}
                  </ListItem>
                  <ListItem>
                    {t("card.modal.status")}: {meta.status}
                  </ListItem>
                </List>
              </Box>
            )}
          </VStack>
        }
        footer={
          <HStack gap={4} py={2}>
            {github && (
              <Link href={github} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="lg" />{" "}
                {t("card.githubTooltip")}
              </Link>
            )}
            {link && (
              <Link href={link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGlobe} size="lg" />{" "}
                {t("card.websiteTooltip")}
              </Link>
            )}
          </HStack>
        }
        zIndex="2000"
        isCentered
        size="5xl"
      />
    </MotionVStack>
  );
};

export default Card;
