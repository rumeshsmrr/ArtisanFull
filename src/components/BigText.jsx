import React, { useState, useEffect } from "react";
import TextHoverEffect from "./TextHoverEffect";
import GradientText from "./GradientText";

export default function BigText() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1000);
    };

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative flex w-full items-center h-fit bg-black">
      {isSmallScreen ? (
        <GradientText text="Artisan" />
      ) : (
        <TextHoverEffect text="Artisan" />
      )}
    </div>
  );
}
