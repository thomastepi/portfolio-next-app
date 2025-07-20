"use client";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import TitleWrapper from "../layout/TitleWrapper/TitleWrapper";
import { motion } from "framer-motion";
import * as Yup from "yup";
import FullScreenSection from "../FullScreenSection/FullScreenSection";
import { useT } from "@/app/i18n/client";
import useSubmit from "@/hooks/useSubmit";
import { useAlertContext } from "@/context/alertContext";
import s from "./ContactMeSection.module.css";

const MotionHeading = motion(Heading);

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const [submittedFirstName, setSubmittedFirstName] = React.useState("");
  const { t, i18n } = useT("translation");

  const language = i18n.language;

  const inputBg = useColorModeValue("gray.200", "gray.700");
  const borderColor = useColorModeValue("gray.400", "gray.500");
  const focusBorderColor = useColorModeValue("blue.500", "blue.300");

  const textColor = useColorModeValue("white", "gray.900");

  const formik = useFormik({
    initialValues: { name: "", email: "", type: "", comment: "" },
    onSubmit: async (values) => {
      const sanitizedValues = {
        ...values,
        name: values.name.trim(),
        email: values.email.trim(),
        comment: values.comment.trim(),
      };

      await submit({ ...sanitizedValues, language });
      setSubmittedFirstName(sanitizedValues.name);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(2, t("contactMe.validation.minName"))
        .max(100, t("contactMe.validation.maxName"))
        .matches(/^[a-zA-ZÀ-ÿ '-]+$/, t("contactMe.validation.invalidName"))
        .required(t("contactMe.validation.requiredName")),

      email: Yup.string()
        .trim()
        .email(t("contactMe.validation.invalidEmail"))
        .required(t("contactMe.validation.requiredEmail")),

      type: Yup.string()
        .oneOf(
          ["hireMe", "feedback", "other"],
          t("contactMe.validation.invalidType")
        )
        .nullable(),

      comment: Yup.string()
        .trim()
        .min(25, t("contactMe.validation.minComment"))
        .max(1000, t("contactMe.validation.maxComment"))
        .matches(
          /^[^<>/"'`;(){}]*$/,
          t("contactMe.validation.invalidCharacters")
        )
        .required(t("contactMe.validation.requiredComment")),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.type === "success" && submittedFirstName) {
        var message =
          response.success ||
          t("contactMe.alerts.success", {
            name: submittedFirstName,
          });
        var type = "success";
        onOpen(type, message);
        formik.resetForm();
      } else if (response.type === "error") {
        var message = response.message || t("contactMe.alerts.error");
        var type = "error";
        onOpen(type, message);
      }
    }
  }, [response, submittedFirstName]);

  return (
    <FullScreenSection as="section" w="90%" my="6rem" spacing={8}>
      <TitleWrapper my="4rem">
        <MotionHeading
          textAlign={"center"}
          id="contactme-section"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          {t("contactMe.heading")}
        </MotionHeading>
      </TitleWrapper>
      <Text
        textAlign="center"
        fontSize="lg"
        maxW="600px"
        mx="auto"
        px={4}
        color={useColorModeValue("gray.700", "gray.300")}
      >
        {t("contactMe.intro")}
      </Text>
      <Box p="30px" w={{ base: "100%", md: "80%", lg: "60%" }}>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={5}>
            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
              <FormLabel htmlFor="name">
                <span className={s["required-asterisk"]}>* </span>
                {t("contactMe.labels.name")}
              </FormLabel>
              <Input
                id="name"
                name="name"
                {...formik.getFieldProps("name")}
                bg={inputBg}
                borderColor={borderColor}
                _hover={{ borderColor: focusBorderColor }}
                _focus={{ borderColor: focusBorderColor }}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.email && formik.errors.email}
            >
              <FormLabel htmlFor="email">
                <span className={s["required-asterisk"]}>* </span>
                {t("contactMe.labels.email")}
              </FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps("email")}
                bg={inputBg}
                borderColor={borderColor}
                _hover={{ borderColor: focusBorderColor }}
                _focus={{ borderColor: focusBorderColor }}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="type">
                {t("contactMe.labels.type")}{" "}
                <span style={{ fontStyle: "italic", fontWeight: "normal" }}>
                  {t("contactMe.optional")}
                </span>
              </FormLabel>
              <Select
                id="type"
                name="type"
                {...formik.getFieldProps("type")}
                bg={inputBg}
                borderColor={borderColor}
                _hover={{ borderColor: focusBorderColor }}
                _focus={{ borderColor: focusBorderColor }}
              >
                <option value="">{t("contactMe.placeholders.select")}</option>
                <option value="hireMe">
                  {t("contactMe.placeholders.hireMe")}
                </option>
                <option value="feedback">
                  {t("contactMe.placeholders.feedback")}
                </option>
                <option value="other">
                  {t("contactMe.placeholders.other")}
                </option>
              </Select>
            </FormControl>
            <FormControl
              isInvalid={formik.touched.comment && formik.errors.comment}
            >
              <FormLabel htmlFor="comment">
                <span className={s["required-asterisk"]}>* </span>
                {t("contactMe.labels.message")}
              </FormLabel>
              <Textarea
                id="comment"
                name="comment"
                height={250}
                {...formik.getFieldProps("comment")}
                bg={inputBg}
                borderColor={borderColor}
                _hover={{ borderColor: focusBorderColor }}
                _focus={{ borderColor: focusBorderColor }}
              />
              <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
            </FormControl>
            <Button
              type="submit"
              width="full"
              colorScheme="teal"
              isLoading={isLoading}
              color={textColor}
            >
              {t("contactMe.buttons.send")}
            </Button>
          </VStack>
        </form>
      </Box>
    </FullScreenSection>
  );
};

export default ContactMeSection;
