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
        stagger: 0.1, // Stagger the animation for each letter
        delay: 2,
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
        <img className="Logo" src={logo} />
        <h1>{splitText("Artisan Antiques")}</h1>
      </div>
    </section>
  );
}
