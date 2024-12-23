import React, { useState, useEffect } from "react";
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
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed (e.g., 2 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader isVisible={isLoading} />
      ) : (
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
      )}
    </>
  );
}

export default App;
