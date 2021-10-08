import React from 'react';
import './Topbar.css';
import {
    FaEnvelope,
    FaPhone,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaSkype
} from 'react-icons/fa';

export default function Topbar({isScrolled}) {
    return (
        <div
            id='topbar'
            className={`topbar d-none d-lg-flex align-items-center fixed-top ${isScrolled ? 'topbar-scrolled' : ''}`}
        >
            <div className="container d-flex">
                <div className="contact-info me-auto">
                    <i><FaEnvelope /></i>
                    <a href="/">contact@gmail.com</a>
                    <i><FaPhone /></i>
                    +999058 22 2289
                </div>
                <div className="social-links">
                    <a href="/"><FaFacebook /></a>
                    <a href="/"><FaInstagram /></a>
                    <a href="/"><FaTwitter /></a>
                    <a href="/"><FaLinkedin /></a>
                    <a href="/"><FaSkype /></a>
                </div>
            </div>
        </div>
    )
}
