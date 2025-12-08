'use client';
import React from "react";
import {
  LandingSection,
  ProjectsSection,
  ContactMeSection,
  AboutMe,
  Alert,
  HighlightedArticles,
  ScrollAnimatedBox
} from "@/components";

function HomePage() {
  return (
    <>
      <LandingSection />
      <ScrollAnimatedBox>
        <ProjectsSection />
      </ScrollAnimatedBox>
      <ScrollAnimatedBox>
        <HighlightedArticles />
      </ScrollAnimatedBox>
      <ScrollAnimatedBox>
        <AboutMe />
      </ScrollAnimatedBox>
      <>
        <ContactMeSection />
      </>
      <Alert />
    </>
  );
}

export default HomePage;
