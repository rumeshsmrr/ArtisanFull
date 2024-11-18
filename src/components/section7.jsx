import React from "react";
import { motion } from "framer-motion";

function Section7() {
  const contentData = [
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
    <section className="bg-black py-16 w-full">
      <div className="container px-4 md:px-12">
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

        {contentData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 font-[Olivera]">
              {item.title}
            </h3>
            <p className="text-base md:text-lg text-white leading-relaxed mb-12 md:mb-16">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Section7;
