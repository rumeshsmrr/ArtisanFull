import React from 'react';
import '../css/Landing.css'; // Import CSS for styling
import logo from "../assets/ArtisanWhite-Logo2.png"

export default function Landing() {
    return (
        <section className="landing">
            <div className="Logo-box">
                <img className='Logo' src={logo} alt="Artisan Logo" />
                <h1>Artisan Antiques</h1>
            </div>
        </section>
    );
}
