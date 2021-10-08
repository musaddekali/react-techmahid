import React from 'react';
import './Hero.css';
import { FaRegPlayCircle } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="hero section-padding">
            <div data-aos="zoom-out" className="container">
                <h1> Welcome to <span className="theme-secondary-text">TechMahid</span></h1>
                <h2>We are team of talanted designers making websites with Bootstrap</h2>
                <div className="d-flex">
                    <a href="#about" className="btn-get-started btn btn-primary me-4">Get Started</a>
                    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" target="_blank" className="btn-watch-video btn btn-primary"><i><FaRegPlayCircle/></i> Watch Video</a>
                </div>
            </div>
        </section>
    )
}
