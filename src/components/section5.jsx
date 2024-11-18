import React, { useEffect, useRef, useState } from "react";
import "../css/section5.css";

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
    <section className="section5-back">
      <div className="flex h-full items-center justify-center">
        <div className="sec5">
          <div
            className={`text1 ${isTextVisible ? "fade-in" : ""}`}
            ref={textRef}
          >
            <h2>
              Carefully Handpicked
              <br /> from Across the Island.
            </h2>
            <p>
              There’s a broad range of designs, styles, and options to choose
              from when browsing antique furniture at Artisan Antique’s showroom
              located at Nawala. These unique pieces are carefully handpicked by
              our experts from across the island including Moratuwa, Galle,
              Bentota and Jaffna which emerged as important centres for
              furniture making from the 17th century onwards.
            </p>
          </div>

          <div
            className={`squareo ${isSquareVisible ? "fade-in" : ""}`}
            ref={squareRef}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
