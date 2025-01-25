import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

export default function Timeline() {
  const timelineData = [
    {
      title: "A Bright Future",
      text: "As Island Artisan grows, Damian envisions expanding his product line to include more innovative designs and collaborations with local artists. He aspires to showcase the beauty of Sri Lankan craftsmanship on global platforms, bringing attention to the incredible talent and artistry found on the island.",
    },
    {
      title: "A Passion for Craftsmanship",
      text: "Damian McLoughlin’s journey from London to Sri Lanka is a powerful reminder of the transformative power of pursuing one's dreams. By blending cultures, embracing sustainability, and fostering community, he has created a unique niche in the world of bespoke furniture. His story inspires others to follow their passions, reminding us that sometimes, the most extraordinary experiences await just beyond our comfort zones.",
    },
    {
      title: "A New Beginning in Sri Lanka",
      text: "Once he arrived in Colombo, Damian was immediately captivated by the lush landscapes, warm climate, and the warmth of the local people. The island's rich tradition of woodworking and exquisite craftsmanship inspired him to establish his own bespoke furniture line, aptly named “Island Artisan.” Drawing on the techniques and styles of Sri Lankan artisans, Damian aimed to create pieces that celebrated both his London roots and the island's unique design heritage.",
    },
    {
      title: "Blending Cultures and Techniques",
      text: "At the heart of Island Artisan is the collaboration between Damian and local craftsmen. Recognizing the immense talent within Sri Lanka, he sought to learn from these artisans, incorporating their traditional methods into his designs. This partnership allowed Damian to create stunning pieces that reflect the island's aesthetic while infusing them with his unique contemporary flair.",
    },
    {
      title: "Sustainable Practices",
      text: "In addition to his passion for design, Damian is deeply committed to sustainability. He prioritizes eco-friendly practices, ensuring that the materials used in his furniture are sourced responsibly. By collaborating with local suppliers who share his values, he minimizes the environmental impact of his work and contributes to the preservation of Sri Lanka's natural resources.",
    },
    {
      title: "Overcoming Challenges",
      text: "Transitioning to life in Sri Lanka was not without its challenges. Damian faced language barriers, cultural differences, and the complexities of establishing a business in a new environment. However, his unwavering passion for his craft and the support of the local community helped him navigate these obstacles. Over time, he built a reputation for quality and creativity, earning the trust of clients both locally and internationally.",
    },
  ];

  return (
    <div className="w-screen py-4 px-2 md:py-16 md:px-12">
      <motion.div
        className="flex justify-start gap-2 mb-8 items-center"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-white font-poppinsRegular tracking-wide text-sm md:text-base mb-2">
          Our Story
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
      <div className="bg-black w-screen flex justify-center items-center">
        <ul className="relative container">
          {timelineData.map((item, index) => (
            <motion.li
              key={index}
              className={`flex justify-between items-start w-full mb-10 ${
                index % 2 === 0
                  ? "md:flex-row-reverse flex-col md:items-start"
                  : "md:flex-row flex-col md:items-start"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Vertical Line */}
              <div className="absolute md:left-1/2 left-5 top-0 md:w-0.5 w-1 bg-gray-700 md:-translate-x-1/2 h-full"></div>

              {/* Centered Icon */}
              <div className="absolute md:left-1/2 left-0 z-10 md:-translate-x-1/2 md:-translate-y-1/2 bg-gray-800 p-3 rounded-full border-4 border-gray-700 flex items-center justify-center">
                <FaCheckCircle
                  className="text-white md:h-6 md:w-6 h-4 w-4"
                  aria-label="Tick Icon"
                />
              </div>

              {/* Content */}
              <motion.div
                className={`md:w-5/12 w-full mt-8 md:mt-0 p-8 rounded-lg ${
                  index % 2 === 0
                    ? "md:text-start text-center"
                    : "md:text-end text-center"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="text-gray-200">{item.text}</p>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
