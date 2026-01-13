"use client";
import React from "react";
import { useColorMode, IconButton, Tooltip } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Tooltip
      label={colorMode === "light" ? "Dark" : "Light"}
      aria-label="Toggle color mode"
      placement="bottom"
      hasArrow
      openDelay={500}
    >
      <IconButton
        size="sm"
        aria-label="Toggle color mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
};

export default ToggleColorMode;
