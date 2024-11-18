import React, { useEffect, useRef, useState } from 'react';
import '../css/section3.css';

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
        <section className="section3-back">
            <div className="sec3">
                <div 
                    className={`square ${isSquareVisible ? 'fade-in' : ''}`} 
                    ref={squareRef}>
                </div>
                <div 
                    className={`text ${isTextVisible ? 'fade-in' : ''}`} 
                    ref={textRef}>
                    <h2>Carrying Timeless <br/>Craftsmanship to the Future.</h2>
                    <p>Sri Lankan antiques bears the legacy of the island’s artisan craftsmen. Carved from locally sourced wood and afterwards adorned with intricate patterns which are the hallmarks of Sri Lankan culture, these furniture reflect the evolving lifestyles of precolonial and colonial Sri Lanka.</p>
                </div>
            </div>
        </section>
    );
}

export default Section3;
