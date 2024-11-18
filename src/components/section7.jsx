import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

function Section7() {
    const textRef = useRef(null);
    const squareRef = useRef(null);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [isSquareVisible, setIsSquareVisible] = useState(false);

    useEffect(() => {
        const textObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsTextVisible(true);
                    textObserver.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        const squareObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSquareVisible(true);
                    squareObserver.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (textRef.current) {
            textObserver.observe(textRef.current);
        }
        if (squareRef.current) {
            squareObserver.observe(squareRef.current);
        }

        return () => {
            if (textRef.current) {
                textObserver.unobserve(textRef.current);
            }
            if (squareRef.current) {
                squareObserver.unobserve(squareRef.current);
            }
        };
    }, []);

    return (
        <section className="bg-black py-16">
            <div className="container px-6 md:px-[12]">
                <motion.div
                    className="flex justify-start gap-2 mb-12 items-center"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-white font-poppinsRegular tracking-wide text-sm mb-2">
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

                <div 
                    className={`transition-opacity duration-700 ease-in-out transform ${
                        isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    } text-center`} 
                    ref={textRef}
                >
                    <h2 className="text-5xl font-bold text-white mb-8 font-[Olivera]">
                        From London to Colombo: <br/>Damian McLoughlin's Journey to Craft Bespoke Furniture in Sri Lanka
                    </h2>
                    <p className="text-lg text-white leading-relaxed mb-16">
                        In an increasingly globalized world, tales of individuals who venture beyond their homeland to pursue their passions resonate deeply. One such inspiring story is that of Damian McLoughlin, a talented craftsman from London who has embarked on a remarkable journey to Sri Lanka, where he channels his creative energy into crafting bespoke furniture.
                    </p>

                    <h3 className="text-3xl font-semibold text-white mb-4 font-[Olivera]">A Passion for Craftsmanship</h3>
                    <p className="text-lg text-white leading-relaxed mb-16">
                        Damian McLoughlin’s journey from London to Sri Lanka is a powerful reminder of the transformative power of pursuing one's dreams. By blending cultures, embracing sustainability, and fostering community, he has created a unique niche in the world of bespoke furniture. His story inspires others to follow their passions, reminding us that sometimes, the most extraordinary experiences await just beyond our comfort zones.
                    </p>

                    <h3 className="text-3xl font-semibold text-white mb-4 font-[Olivera]">A New Beginning in Sri Lanka</h3>
                    <p className="text-lg text-white leading-relaxed mb-16">
                        Once he arrived in Colombo, Damian was immediately captivated by the lush landscapes, warm climate, and the warmth of the local people. The island's rich tradition of woodworking and exquisite craftsmanship inspired him to establish his own bespoke furniture line, aptly named “Island Artisan.” Drawing on the techniques and styles of Sri Lankan artisans, Damian aimed to create pieces that celebrated both his London roots and the island's unique design heritage.
                    </p>

                    <h3 className="text-3xl font-semibold text-white mb-4 font-[Olivera]">Blending Cultures and Techniques</h3>
                    <p className="text-lg text-white leading-relaxed mb-16">
                        At the heart of Island Artisan is the collaboration between Damian and local craftsmen. Recognizing the immense talent within Sri Lanka, he sought to learn from these artisans, incorporating their traditional methods into his designs. This partnership allowed Damian to create stunning pieces that reflect the island's aesthetic while infusing them with his unique contemporary flair.
                    </p>

                    <h3 className="text-3xl font-semibold text-white mb-4 font-[Olivera]">Sustainable Practices</h3>
                    <p className="text-lg text-white leading-relaxed mb-16">
                        In addition to his passion for design, Damian is deeply committed to sustainability. He prioritizes eco-friendly practices, ensuring that the materials used in his furniture are sourced responsibly. By collaborating with local suppliers who share his values, he minimizes the environmental impact of his work and contributes to the preservation of Sri Lanka's natural resources.
                    </p>

                    <h3 className="text-3xl font-semibold text-white mb-4 font-[Olivera]">Overcoming Challenges</h3>
                    <p className="text-lg text-white leading-relaxed mb-16">
                        Transitioning to life in Sri Lanka was not without its challenges. Damian faced language barriers, cultural differences, and the complexities of establishing a business in a new environment. However, his unwavering passion for his craft and the support of the local community helped him navigate these obstacles. Over time, he built a reputation for quality and creativity, earning the trust of clients both locally and internationally.
                    </p>

                    <h3 className="text-3xl font-semibold text-white mb-4 font-[Olivera]">A Bright Future</h3>
                    <p className="text-lg text-white leading-relaxed mb-16">
                        As Island Artisan grows, Damian envisions expanding his product line to include more innovative designs and collaborations with local artists. He aspires to showcase the beauty of Sri Lankan craftsmanship on global platforms, bringing attention to the incredible talent and artistry found on the island.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Section7;
