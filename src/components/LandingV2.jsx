import React, { useEffect, useRef } from "react";
import bg from "../assets/bg001.jpg";
import sandLand from "../assets/dust1.png";
import logo from "../assets/ArtisanWhite-Logo2.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function LandingV2() {
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const bgRef = useRef(null);
  const sandLandRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const splitText = (text) =>
      text
        .split("")
        .map((char) => `<span style="opacity: 0;">${char}</span>`)
        .join("");

    // Typing animation for "Artisan"
    if (textRef1.current) {
      textRef1.current.innerHTML = splitText("Artisan");
      gsap.to(textRef1.current.querySelectorAll("span"), {
        opacity: 1,
        duration: 0.2,
        stagger: 0.1,
        delay: 0.5,
      });
    }

    // Typing animation for "Antiques"
    if (textRef2.current) {
      textRef2.current.innerHTML = splitText("Antiques");
      gsap.to(textRef2.current.querySelectorAll("span"), {
        opacity: 1,
        duration: 0.2,
        stagger: 0.1,
        delay: 1,
      });
    }

    const bgElement = bgRef.current;
    const sandLandElement = sandLandRef.current;
    const logoElement = logoRef.current;
    const titleElement = titleRef.current;

    // Zoom-out effect for background image
    gsap.fromTo(
      bgElement,
      { scale: 2 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: bgElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Zoom-out effect for foreground image
    gsap.fromTo(
      sandLandElement,
      { scale: 1.5 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sandLandElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );

    // Zoom-out effect for logo
    gsap.fromTo(
      logoElement,
      { scale: 3 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: logoElement,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      titleElement.current,
      { scale: 2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: titleElement.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-blank">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {/* Logo */}
        <img
          ref={logoRef}
          src={logo}
          alt="Artisan Logo"
          className="w-auto h-32 mb-20 "
        />
        {/* Logo and Text Row */}
        <div
          className="flex flex-row  items-center justify-center space-x-4  "
          ref={titleRef}
        >
          {/* Text Animations */}

          <div
            className="font-primaryFont font-Olivera text-5xl md:text-6xl lg:text-[180px] w-fit text-[#ebf4f5] leading-none"
            ref={textRef1}
          ></div>
          <div
            className="font-primaryFont font-Olivera text-5xl md:text-6xl lg:text-[180px] bg-gradient-to-r from-[#ebf4f5] to-[#b5c6e0] bg-clip-text text-transparent animate-gradient leading-none"
            ref={textRef2}
          ></div>
        </div>
      </div>

      {/* Foreground Image */}
      <img
        ref={sandLandRef}
        src={sandLand}
        alt="Foreground"
        className="absolute bottom-0 w-full h-auto z-10"
      />
    </div>
  );
}
