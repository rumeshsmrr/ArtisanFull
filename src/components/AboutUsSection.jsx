import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/ArtisanWhite-Logo2.png";
const AnimatedCounter = ({ from, to, duration, isInView }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let start = null;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span>{count}</span>;
};

const AboutUsSection = () => {
  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const [isInView3, setIsInView3] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(true); // Track logo visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "counter1") setIsInView1(true);
            if (entry.target.id === "counter2") setIsInView2(true);
            if (entry.target.id === "counter3") setIsInView3(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const counter1 = document.getElementById("counter1");
    const counter2 = document.getElementById("counter2");
    const counter3 = document.getElementById("counter3");

    if (counter1) observer.observe(counter1);
    if (counter2) observer.observe(counter2);
    if (counter3) observer.observe(counter3);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show logo when scrolling down and hide when scrolling above 100px
      if (window.scrollY < 900) {
        setIsLogoVisible(false);
      } else {
        setIsLogoVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="text-center h-fit py-8  px-8 lg:px-32 w-screen bg-primary011">
      <motion.div
        className="w-full flex flex-col lg:flex-row justify-between lg:items-end"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-fit h-fit flex flex-col justify-start items-start">
          <motion.div
            className="flex justify-start gap-2 items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-poppinsRegular tracking-wide text-sm mb-2">
              About Us
            </h3>
            <svg width="200" height="2" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="#d9dada"
                strokeWidth="2"
              />
            </svg>
          </motion.div>

          <motion.h1
            className="text-6xl w-[350px] md:w-[390px] text-left mt-2 text-white font-[Olivera] mb-4 text-wrap"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Bringing Heritage to Modern Spaces.
          </motion.h1>
        </div>

        <motion.p
          className="text-white pt-2 font-poppinsBold text-xl mb-12 lg:w-[600px] text-end lg:text-start"
          style={{ textIndent: "5rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          At Artisan Antique, we are dedicated to sourcing you the finest
          precolonial and colonial Sri Lankan antique furniture. These timeless
          furniture with uncompromised quality is set to enhance your
          contemporary living spaces in a truly Sri Lankan style.
        </motion.p>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-start md:justify-between items-center w-full mt-9 lg:mt-36">
        <motion.div
          id="counter1"
          className="text-center w-[200px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[100px] text-white font-poppinsLight">
            <AnimatedCounter
              from={0}
              to={100}
              duration={3}
              isInView={isInView1}
            />
            <span className="text-white">+</span>
          </h2>
          <p className="text-white text-sm">
            Products that we have created and sold on the market
          </p>
        </motion.div>

        <motion.div
          id="counter2"
          className="text-center w-[200px] mt-8 md:mt-0 flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[100px] text-white font-poppinsLight flex items-center justify-center">
            <AnimatedCounter
              from={0}
              to={400}
              duration={3}
              isInView={isInView2}
            />
            <span className="text-white">+</span>
          </h2>
          <p className="text-white text-sm">
            Happy and loyal customers buy our products
          </p>
        </motion.div>

        <motion.div
          id="counter3"
          className="text-center w-[200px] mt-8 md:mt-0 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-[100px] text-white font-poppinsLight">
            <AnimatedCounter
              from={0}
              to={99}
              duration={3}
              isInView={isInView3}
            />
            <span className="text-white">%</span>
          </h2>
          <p className="text-white text-sm">
            Customers who have purchased will come back again
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
