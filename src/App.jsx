import { useState } from "react";
import HomeNavbar from "./components/MainNavbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import AboutModal from "./components/AboutModal";
import DivisionSection from "./components/DivisionSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  // Show Modal State
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Show Modal State

  return (
    <>
      <HomeNavbar />
      <HeroSection />
      <AboutSection showModalButton={handleShow} />
      <AboutModal modalState={show} closeModal={handleClose} />
      <DivisionSection />
      <FooterSection />
    </>
  );
}
