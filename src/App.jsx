// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import HomeNavbar from "./components/MainNavbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

export default function App() {
  return (
    <>
      <HomeNavbar />
      <HeroSection />
      <AboutSection />
    </>
  );
}
