"use client";
import React from "react";
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Divider,
} from "@chakra-ui/react";
import Markdown from "react-markdown";
import { useT } from "@/app/i18n/client";
import { Trans } from "react-i18next";

const PrivacyPolicyPage = () => {
  const { t } = useT("translation");
  return (
    <>
      <Box maxW="800px" mx="auto" p={6}>
        <Heading as="h1" size="xl" mb={6} textAlign="center">
          {t("privacyPolicy.title")}
        </Heading>
        <Text fontSize="sm" color="gray.500" mb={6}>
          {t("privacyPolicy.effectiveDate")}{" "}
        </Text>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.introduction.title")}
        </Heading>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.introduction.text")}
        </Text>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.scope.title")}
        </Heading>
        <Text mb={4}>{t("privacyPolicy.scope.subtitle")}</Text>
        <UnorderedList mb={4}>
          {t("privacyPolicy.scope.list", {
            returnObjects: true,
          }).map((item, index) => (
            <ListItem key={index}>
              <Markdown>{item}</Markdown>
            </ListItem>
          ))}
        </UnorderedList>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.scope.text")}
        </Text>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.informationCollected.title")}
        </Heading>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.informationCollected.subtitle")}
        </Text>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.informationCollected.description")}
        </Text>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.informationCollected.subtext")}
        </Text>
        <UnorderedList mb={4}>
          {t("privacyPolicy.informationCollected.list", {
            returnObjects: true,
          }).map((item, index) => (
            <ListItem key={index}>
              <Markdown>{item}</Markdown>
            </ListItem>
          ))}
        </UnorderedList>
        <Text mb={4}>
          {t("privacyPolicy.informationCollected.trackingParams")}
        </Text>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.informationCollected.identifiableInfo")}
        </Text>

        {/* <Divider my={4} /> */}

        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.informationCollected.recaptcha.title")}
        </Text>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.informationCollected.recaptcha.description")}
        </Text>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.informationCollected.recaptcha.subtext")}
        </Text>
        <UnorderedList mb={4}>
          {t("privacyPolicy.informationCollected.recaptcha.list", {
            returnObjects: true,
          }).map((item, index) => (
            <ListItem key={index}>
              <Markdown>{item}</Markdown>
            </ListItem>
          ))}
        </UnorderedList>
        <Text mb={4}>
          {t("privacyPolicy.informationCollected.recaptcha.note")}
        </Text>
        <Text mb={4}>
          <Trans
            i18nKey="privacyPolicy.informationCollected.recaptcha.disclaimer"
            components={{
              privacy: (
                <Link
                  href="https://policies.google.com/privacy"
                  isExternal
                  color="teal.400"
                />
              ),
              tos: (
                <Link
                  href="https://policies.google.com/terms"
                  isExternal
                  color="teal.400"
                />
              ),
            }}
          />
        </Text>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.cookies.title")}
        </Heading>
        <Text mb={4}>{t("privacyPolicy.cookies.description")} </Text>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.cookies.essential")}
        </Text>
        <UnorderedList mb={4}>
          {t("privacyPolicy.cookies.essentialList", {
            returnObjects: true,
          }).map((item, index) => (
            <ListItem key={index}>
              <Markdown>{item}</Markdown>
            </ListItem>
          ))}
        </UnorderedList>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.cookies.optional")}
        </Text>
        <UnorderedList mb={4}>
          {t("privacyPolicy.cookies.optionalList", {
            returnObjects: true,
          }).map((item, index) => (
            <ListItem key={index}>
              <Markdown>{item}</Markdown>
            </ListItem>
          ))}
        </UnorderedList>
        <Text as={Markdown} mb={4} ml={6}>
          {t("privacyPolicy.cookies.impliedConsent")}
        </Text>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.cookies.retention")}
        </Text>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.contactForm.title")}
        </Heading>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.contactForm.subtitle")}
        </Text>
        <Text mb={4}>{t("privacyPolicy.contactForm.description")}</Text>
        <UnorderedList mb={4}>
          {t("privacyPolicy.contactForm.list", {
            returnObjects: true,
          }).map((item, index) => (
            <ListItem as={Markdown} key={index}>
              {item}
            </ListItem>
          ))}
        </UnorderedList>
        <Text mb={4}>{t("privacyPolicy.contactForm.storage")}</Text>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.guestUsers.title")}
        </Heading>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.guestUsers.description")}
        </Text>
        <Text mb={4}>{t("privacyPolicy.guestUsers.subtext")}</Text>
        <UnorderedList mb={4}>
          {t("privacyPolicy.guestUsers.list", {
            returnObjects: true,
          }).map((item, index) => (
            <ListItem as={Markdown} key={index}>
              {item}
            </ListItem>
          ))}
        </UnorderedList>
        <Text as={Markdown} mb={4}>
          {t("privacyPolicy.guestUsers.text")}
        </Text>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.yourChoices.title")}
        </Heading>
        <Text mb={4}>{t("privacyPolicy.yourChoices.description")}</Text>
        <Link
          href="https://tools.google.com/dlpage/gaoptout"
          color="teal.400"
          isExternal
        >
          {t("privacyPolicy.yourChoices.optOutLink")}
        </Link>
        <Text my={4}>
          {t("privacyPolicy.yourChoices.requestDeletion")}{" "}
          <span>
            <Link color="teal.400" href="mailto:contact@thomastepi.com">
              contact@thomastepi.com
            </Link>
          </span>
        </Text>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.dataRetention.title")}
        </Heading>
        <UnorderedList mb={4}>
          {t("privacyPolicy.dataRetention.description", {
            returnObjects: true,
          }).map((item, index) => (
            <ListItem key={index}>
              <Markdown>{item}</Markdown>
            </ListItem>
          ))}
        </UnorderedList>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.dataSecurity.title")}
        </Heading>
        <Text mb={4}>{t("privacyPolicy.dataSecurity.description")}</Text>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.policyChanges.title")}
        </Heading>
        <Text mb={4}>{t("privacyPolicy.policyChanges.description")}</Text>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.contact.title")}
        </Heading>
        <Text mb={4}>{t("privacyPolicy.contact.description")}</Text>
        <Link href="mailto:contact@thomastepi.com" color="teal.400">
          {t("privacyPolicy.contact.email")}
        </Link>

        <Divider my={4} />

        <Heading as="h2" size="md" mb={4}>
          {t("privacyPolicy.additionalInfo.title")}
        </Heading>
        <Text mb={4}>{t("privacyPolicy.additionalInfo.description")}</Text>
        <Link
          href="https://policies.google.com/privacy"
          color="teal.400"
          isExternal
        >
          {t("privacyPolicy.additionalInfo.privacyLink")}
        </Link>

        <Divider my={4} />

        <Text mt={6} fontSize="sm" color="gray.500">
          {t("privacyPolicy.lastUpdated")}{" "}
        </Text>
      </Box>
    </>
  );
};

export default PrivacyPolicyPage;
