import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "../components/Card";
import { cn } from "../lib/utils";

const cards = [
  { url: "11.jpg", title: "Antique Vase", price: "400", id: 1 },
  { url: "12.jpg", title: "Vintage Clock", price: "150", id: 2 },
  { url: "13.jpg", title: "Classic Chair", price: "200", id: 3 },
  { url: "14.jpg", title: "Porcelain Lamp", price: "500", id: 4 },
  { url: "15.jpg", title: "Rustic Table", price: "2500", id: 5 },
  { url: "16.jpg", title: "Decorative Mirror", price: "2500", id: 6 },
  { url: "17.jpg", title: "Victorian Painting", price: "1750", id: 7 },
  { url: "18.jpg", title: "Marble Statue", price: "500", id: 8 },
];

const Products = ({ className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateYSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(cards.length / 3);
  const firstPart = cards.slice(0, third);
  const secondPart = cards.slice(third, 2 * third);
  const thirdPart = cards.slice(2 * third);

  return (
    <div
      className={cn("h-auto items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-8xl mx-auto gap-10 py-40 px-10">
        <div className="grid gap-10">
          {firstPart.map((card, idx) => (
            <motion.div style={{ y: translateYFirst }} key={`grid-1-${idx}`}>
              <Card card={card} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((card, idx) => (
            <motion.div style={{ y: translateYSecond }} key={`grid-2-${idx}`}>
              <Card card={card} />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((card, idx) => (
            <motion.div style={{ y: translateYThird }} key={`grid-3-${idx}`}>
              <Card card={card} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
