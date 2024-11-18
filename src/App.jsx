import { useState } from "react";

import Landing from "./components/Landing";
import "./App.css";
import Section3 from "./components/section3";
import Carousel from "./components/carousel";
import AboutUsSection from "./components/AboutUsSection";
import BigText from "./components/BigText";
import Footer from "./components/Footer";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Section7 from "./components/section7";
import LogoVisibility from "./components/LogoVisibility";

function App() {
  return (
    <>
      <LogoVisibility />
      <Landing />
      <AboutUsSection />
      <Section3 />
      <Carousel />
      <Section5 />
      <Section6 />
      <BigText />
      <Section7 />
      <Footer />
    </>
  );
}

export default App;
