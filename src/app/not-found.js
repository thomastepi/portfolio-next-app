"use client";
import Image from "next/image";
import Link from "next/link";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import errorImg from "@/assets/images/page-not-found.svg";
import { Providers } from "@/components/Providers/Providers";

export default function NotFound() {
  return (
    <Providers>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Image src={errorImg} alt="Page not found" width={300} height={300} />
        <Heading as="h1" size="xl" textAlign="center" mt={4}>
          Page Not Found / Page introuvable
        </Heading>
        <Text textAlign="center" mt={4} mb={6}>
          {
            "Sorry, the page you are looking for does not exist. / Désolé, la page que vous recherchez n'existe pas."
          }
        </Text>
        <Button as={Link} href="/" colorScheme="teal" variant="link">
          Home / Accueil
        </Button>
      </Box>
    </Providers>
  );
}
