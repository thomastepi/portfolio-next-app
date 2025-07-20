"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  HStack,
  Divider,
  useColorMode,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import DrawerPanel from "../Drawer/Drawer";
import ToggleColorMode from "../ToggleColorMode/ToggleColorMode";
import { useT } from "@/app/i18n/client";
import { usePathname, useRouter } from "next/navigation";
import socials from "../../data/socials";
//import useIsMobile from "@/hooks/useIsMobile";

const Header = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isMobile = useBreakpointValue({ base: true, md: false });

  const { colorMode } = useColorMode();
  const { i18n, t } = useT("translation");
  const router = useRouter();
  const pathname = usePathname();

  const lang = i18n.resolvedLanguage;

  const handleLanguageChange = () => {
    const newLang = i18n.resolvedLanguage === "en" ? "fr" : "en";

    const newPath = pathname.replace(/^\/(en|fr)/, `/${newLang}`);
    i18n.changeLanguage(newLang);
    router.push(newPath);
  };

  // this is to prevent quick flash of incorrect media query values
  // caused by the use of useBreakpointValue hook
  if (!hasMounted) return null;

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1"
      boxShadow="md"
      backgroundColor={colorMode === "light" ? "gray.200" : "gray.900"}
    >
      <Box maxWidth="1280px" margin="0 auto">
        <HStack
          px={isMobile ? 4 : 16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack as="nav" aria-label="Social Media Links" spacing={8}>
            {isMobile ? (
              <DrawerPanel />
            ) : (
              socials.map(
                (social) =>
                  social.name !== "WhatsApp" && (
                    <a
                      key={social.url}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.name} profile`}
                    >
                      {!isMobile && (
                        <FontAwesomeIcon icon={social.icon} size="2x" />
                      )}
                    </a>
                  )
              )
            )}
          </HStack>

          <HStack spacing={8}>
            <HStack as="nav" aria-label="Main Navigation" spacing={8}>
              <Link style={{ cursor: "pointer" }} href="/">
                {t("header.home")}
              </Link>
              {!isMobile && (
                <>
                  <Link style={{ cursor: "pointer" }} href="/#projects-section">
                    {t("header.projects")}
                  </Link>
                  <Link style={{ cursor: "pointer" }} href="/#about-me-section">
                    {t("header.aboutMe")}
                  </Link>
                  <Link
                    style={{ cursor: "pointer", textAlign: "center" }}
                    href="/#contactme-section"
                  >
                    {t("header.contactMe")}
                  </Link>
                  <Link
                    style={{ cursor: "pointer", textAlign: "center" }}
                    href="/#articles-section"
                  >
                    {t("header.blog")}
                  </Link>
                  <Link
                    style={{ cursor: "pointer" }}
                    href="https://drive.google.com/file/d/1qq4EXVJoe9Jh-GD1WIhVFCFt8yl909d3/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("header.resume")}
                  </Link>
                </>
              )}
            </HStack>

            <Divider
              borderColor={colorMode === "light" ? "gray.500" : "gray.600"}
              h={"30px"}
              orientation="vertical"
            />

            <Button
              aria-label="Change Language"
              variant="ghost"
              _hover={{ textDecoration: "underline", background: "none" }}
              onClick={() => handleLanguageChange()}
            >
              {lang === "en"
                ? isMobile
                  ? "FR"
                  : "Français"
                : isMobile
                ? "EN"
                : "English"}{" "}
            </Button>
            <ToggleColorMode />
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
