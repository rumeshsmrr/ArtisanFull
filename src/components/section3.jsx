import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../css/section3.css";

function Section3() {
  const textRef = useRef(null);
  const squareRef = useRef(null);
  const isTextVisible = useInView(textRef, { threshold: 0.5 });
  const isSquareVisible = useInView(squareRef, { threshold: 0.5 });

  return (
    <section className="section3-back">
      <div className="flex h-full items-center justify-center">
        <div className="sec3">
          <motion.div
            className="square"
            ref={squareRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isSquareVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.div
            className="text p-3"
            ref={textRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isTextVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h2>
              Carrying Timeless <br />
              Craftsmanship to the Future.
            </h2>
            <p>
              Sri Lankan antiques bear the legacy of the island’s artisan
              craftsmen. Carved from locally sourced wood and adorned with
              intricate patterns that are the hallmarks of Sri Lankan culture,
              these pieces reflect the evolving lifestyles of precolonial and
              colonial Sri Lanka.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
