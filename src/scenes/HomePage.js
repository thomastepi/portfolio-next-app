'use client';
import React from "react";
import {
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  AboutMe,
  Alert,
  HighlightedArticles
} from "@/components";

function HomePage() {
  return (
    <>
      <LandingSection />
      <ProjectsSection />
      <HighlightedArticles />
      <AboutMe />
      <ContactMeSection />
      <Alert />
    </>
  );
}

export default HomePage;
