'use client';
import React from "react";
import {
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  AboutMe,
  Alert,
} from "@/components";

function HomePage() {
  return (
    <>
      <LandingSection />
      <ProjectsSection />
      <AboutMe />
      <ContactMeSection />
      <Alert />
    </>
  );
}

export default HomePage;
