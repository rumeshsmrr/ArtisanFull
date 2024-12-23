import React, { useEffect } from "react";
import "../css/Landing.css"; // Import CSS for styling
import logo from "../assets/ArtisanWhite-Logo2.png";
import { gsap } from "gsap";

export default function Landing() {
  useEffect(() => {
    // Animate each letter
    gsap.fromTo(
      ".letter",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        delay: 2,
        onComplete: () => {
          // Smooth scroll after animation using native scrollTo
          setTimeout(() => {
            window.scrollTo({
              top: window.innerHeight, // Scroll down one viewport height
              behavior: "smooth", // Smooth scrolling
            });
          }, 500); // Add a slight delay for better effect
        },
      }
    );
  }, []);

  // Helper function to split text into spans
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="letter">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="landing">
      <div className="Logo-box">
        <img className="Logo" src={logo} alt="Artisan Antiques Logo" />
        <h1>{splitText("Artisan Antiques")}</h1>
      </div>
    </section>
  );
}
