"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

const ScrollAnimatedBox = ({ children, once = true, ...rest }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionBox
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default ScrollAnimatedBox;
