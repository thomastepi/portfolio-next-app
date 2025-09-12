"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  ColorModeScript,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "@/theme";
import { AlertProvider } from "@/context/alertContext";

export function Providers({ cookies, children }) {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
        <AlertProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </AlertProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
