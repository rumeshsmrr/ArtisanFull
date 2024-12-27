import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import img1 from "../assets/0G3A1969.jpg";
import img2 from "../assets/section6.jpg";
import img3 from "../assets/imgs/abstract/11.jpg";
import img4 from "../assets/imgs/abstract/12.jpg";
import img5 from "../assets/imgs/abstract/13.jpg";
import img6 from "../assets/imgs/abstract/14.jpg";
import img7 from "../assets/imgs/abstract/15.jpg";
import img8 from "../assets/imgs/abstract/16.jpg";
import img9 from "../assets/imgs/abstract/17.jpg";
import img10 from "../assets/imgs/abstract/18.jpg";
import main from "../assets/main.jpg"; // Background image

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Landing = () => {
  const imageRefs = useRef([]);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const [currentImages, setCurrentImages] = useState(images.slice(0, 2)); // Use the first two images initially

  useEffect(() => {
    // Typing animation for text
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

    // Animate images
    const animateImages = () => {
      imageRefs.current.forEach((img, index) => {
        if (!img) return;

        // Animation: Start from bottom, stop in position, and exit through the top
        gsap.fromTo(
          img,
          { y: "300%", opacity: 0, rotateY: 0 },
          {
            y: "0%",
            routateY: 0,
            opacity: 1,
            duration: 1.5,
            delay: index * 0.5,
            ease: "power2.out",
            onComplete: () => {
              gsap.to(img, {
                y: "-300%",
                routateY: 180,
                opacity: 0,
                duration: 1.5,
                delay: 1, // Pause before exiting
                ease: "power2.in",
                onComplete: () => {
                  // Replace image with a new one after exiting
                  const nextImage =
                    images[Math.floor(Math.random() * images.length)];
                  img.setAttribute("src", nextImage);
                  gsap.set(img, { y: "100%", opacity: 0 }); // Reset position
                },
              });
            },
          }
        );
      });
    };

    // Start the animation and loop
    animateImages();
    const interval = setInterval(animateImages, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-white bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${main})` }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full w-full">
        {/* Row 1 */}
        <div className="flex justify-center w-full gap-24 p-4 h-[200px]">
          <div
            className="z-10 mb-10 text-center font-primaryFont md:text-[100px] lg:text-[250px] text-[#ebf4f5]"
            ref={textRef1}
          ></div>

          <img
            ref={(el) => (imageRefs.current[0] = el)}
            src={currentImages[0]}
            alt="Artisan 1"
            className="object-cover w-60 h-80 rounded-lg shadow-lg -rotate-6"
          />
        </div>

        {/* Row 2 */}
        <div className="flex justify-center items-end w-full gap-24 p-4">
          <img
            ref={(el) => (imageRefs.current[1] = el)}
            src={currentImages[1]}
            alt="Antiques 1"
            className="object-cover w-60 h-80 rounded-lg shadow-lg -rotate-6"
          />
          <div
            className="mb-10 text-center font-primaryFont md:text-[100px] lg:text-[250px] bg-gradient-to-r from-[#ebf4f5] to-[#b5c6e0] bg-clip-text text-transparent animate-gradient"
            ref={textRef2}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
