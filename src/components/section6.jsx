import React, { useEffect, useRef, useState } from "react";
import "../css/section6.css";

function Section3() {
  const textRef = useRef(null);
  const squareRef = useRef(null);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isSquareVisible, setIsSquareVisible] = useState(false);

  useEffect(() => {
    // Create observer for the text element
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true);
          textObserver.unobserve(entry.target); // Disconnect observer after the element is visible
        }
      },
      { threshold: 0.5 }
    );

    // Create observer for the square element
    const squareObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSquareVisible(true);
          squareObserver.unobserve(entry.target); // Disconnect observer after the element is visible
        }
      },
      { threshold: 0.5 }
    );

    // Observe the text and square elements
    if (textRef.current) {
      textObserver.observe(textRef.current);
    }
    if (squareRef.current) {
      squareObserver.observe(squareRef.current);
    }

    return () => {
      // Cleanup observers on unmount
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
      if (squareRef.current) {
        squareObserver.unobserve(squareRef.current);
      }
    };
  }, []);

  return (
    <section className="section6-back">
      <div className="sec6">
        <div
          className={`text2 ${isTextVisible ? "fade-in" : ""}`}
          ref={textRef}
        >
          <h2>Personalise Your Home.</h2>
          <p>
            Your home isn’t just your living space but a true reflection of your
            personality and style. Let the authentic antique furniture finely
            curated by Artisan Antique elevate your home to narrate the story of
            true Sri Lankan artistic legacy.
          </p>
        </div>

        <div
          className={`square1 ${isSquareVisible ? "fade-in" : ""}`}
          ref={squareRef}
        ></div>
      </div>
    </section>
  );
}

export default Section3;
