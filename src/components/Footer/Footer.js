"use client";
import React, { useMemo } from "react";
import {
  Box,
  Button,
  Stack,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { useT } from "@/app/i18n/client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import socials from "../../data/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const Footer = () => {
  const { colorMode } = useColorMode();
  const pathname = usePathname();
  const { t, i18n } = useT("translation");
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <Box
      as="footer"
      backgroundColor={colorMode === "light" ? "gray.200" : "gray.900"}
    >
      <Stack
        margin="0 auto"
        px={12}
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        py={4}
        flexDir="column"
      >
        <Stack
          as="nav"
          aria-label="Social Media Links"
          flexDir={"row"}
          mb={2}
          spacing={5}
        >
          {socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit my ${social.name} profile`}
            >
              <FontAwesomeIcon icon={social.icon} size="lg" />
            </a>
          ))}
        </Stack>
        <Stack flexDir={useBreakpointValue({ base: "column", md: "row" })}>
          <p>Thomas Tepi • © 2024 - {year}</p>
          <Divider
            display={useBreakpointValue({ base: "none", md: "block" })}
            borderColor={colorMode === "light" ? "gray.500" : "gray.600"}
            h="inherit"
            orientation="vertical"
          />
          <Button
            as={Link}
            size="sm"
            variant="link"
            color="teal"
            href={`/${i18n.resolvedLanguage}/privacy-policy`}
          >
            {t("footer.privacyPolicyBtnText")}
          </Button>
        </Stack>

        <Button
          as={Link}
          size="sm"
          variant="link"
          color="teal"
          href={"https://github.com/thomastepi/portfolio-next-app"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("footer.sourceCodeBtnText")}
          <ExternalLinkIcon mx="1" />
        </Button>
      </Stack>
    </Box>
  );
};
export default Footer;
