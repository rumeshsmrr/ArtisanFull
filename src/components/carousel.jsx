import React, { useRef } from "react";
import Products from "./Products";

const GridDisplay = () => {
  const targetRef = useRef(null);

  return (
    <section ref={targetRef} className="relative h-auto bg-black">
      <div className="text-center mb-4">
        <h2 className="text-4xl text-white font-bold uppercase font-Olivera">
          Artisan Antiques
        </h2>
      </div>
      <Products />
    </section>
  );
};

export default GridDisplay;
