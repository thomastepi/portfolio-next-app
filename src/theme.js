"use client";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  colors: {
    lightModeBg: "#f7f7f7",
    darkModeBg: "#1a202c",
    modalDarkBg: "#344955",
  },
  styles: {
    global: (props) => ({
      ":root": {
        "--chakra-colors-bg":
          props.colorMode === "light" ? "#f7f7f7" : "#1a202c",
        "--chakra-colors-text":
          props.colorMode === "light" ? "#1a1a1a" : "#ededed",
      },
      html: {
        width: "100%",
        height: "100%",
        scrollBehavior: "smooth",
        colorScheme: props.colorMode,
      },
      body: {
        minHeight: "100%",
        bg: props.colorMode === "light" ? "lightModeBg" : "darkModeBg",
        color: props.colorMode === "light" ? "gray.800" : "whiteAlpha.900",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        overflowX: "clip",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        transition: "background-color 0.3s ease, color 0.3s ease",
      },
      "*": {
        boxSizing: "border-box",
        padding: 0,
        margin: 0,
      },
      a: {
        color: "inherit",
        textDecoration: "none",
        _hover: {
          textDecoration: "underline",
        },
      },
      code: {
        fontFamily:
          'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      },
      input: {
        borderRadius: "0 !important",
        border: "none !important",
      },
      textarea: {
        borderRadius: "0 !important",
        border: "none !important",
      },
      select: {
        borderRadius: "0 !important",
        border: "none !important",
      },
      button: {
        borderRadius: "0 !important",
      },
    }),
  },
  components: {
    Modal: {
      baseStyle: (props) => ({
        dialog: {
          bg: props.colorMode === "dark" ? "modalDarkBg" : "white",
          color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
          boxShadow: "lg",
        },
      }),
    },
  },
});

export default theme;
