import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/ArtisanWhite-Logo2.png";

const LogoVisibility = () => {
  const [isLogoVisible, setIsLogoVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show logo when scrolling down and hide when scrolling above 900px
      if (window.scrollY < 900) {
        setIsLogoVisible(false);
      } else {
        setIsLogoVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className={`logo ${isLogoVisible ? "visible" : "hidden"}`}
      style={{
        position: "fixed",
        top: "20px",
        right: "40px",
        zIndex: 9999, // Ensure logo is above all other content
        transition: "opacity 0.5s ease",
      }}
    >
      <img src={logo} alt="Logo" style={{ width: "100px" }} />
    </motion.div>
  );
};

export default LogoVisibility;
