"use client";
import React from "react";
import errorImg from "../assets/images/page-not-found.svg";
import { Link } from "next/link";
import { useT } from "@/app/i18n/client";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";

const ErrorPage = () => {
  const { t } = useT("translation");

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Image src={errorImg} alt="Page not found" width="300px" height="300px" />
      <Heading as="h1" size="xl" textAlign="center" mt={4}>
        {t("error.title")}
      </Heading>
      <Text textAlign="center" mt={4} mb={6}>
        {t("error.text")}
      </Text>
      <Button as={Link} href="/" colorScheme="teal" variant={"link"}>
        {t("error.btnText")}
      </Button>
    </Box>
  );
};

export default ErrorPage;
