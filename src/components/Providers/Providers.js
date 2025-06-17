"use client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme";
import { AlertProvider } from "@/context/alertContext";

export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </AlertProvider>
    </ChakraProvider>
  );
}
