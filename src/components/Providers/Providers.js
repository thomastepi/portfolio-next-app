"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme";
import { AlertProvider } from "@/context/alertContext";

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <AlertProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          {children}
        </AlertProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
