import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaSkype,
    FaLinkedin,
    FaChevronRight
} from 'react-icons/fa';

export default function FooterTop() {
    return (
        <div className="footer-top">
            <div data-aos="fade-up" className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-contact">
                        <h3>TechMahid</h3>
                        <p>
                            A108 Adam Street <br />
                            New York, NY 535022 <br />
                            United States
                            <br />
                            <br />
                            Phone: +1 5589 55488 55 <br />
                            Email: info@example.com
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><FaChevronRight /><Link to='/'>Home</Link></li>
                            <li><FaChevronRight /><Link to='/'>About us</Link></li>
                            <li><FaChevronRight /><Link to='/'>Services</Link></li>
                            <li><FaChevronRight /><Link to='/'>Terms of service</Link></li>
                            <li><FaChevronRight /><Link to='/'>Privacy policy</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><FaChevronRight /><Link to='/'>Web Design</Link></li>
                            <li><FaChevronRight /><Link to='/'>Web Development</Link></li>
                            <li><FaChevronRight /><Link to='/'>Product Management</Link></li>
                            <li><FaChevronRight /><Link to='/'>Marketing</Link></li>
                            <li><FaChevronRight /><Link to='/'>Graphic Design</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Our Social Networks</h4>
                        <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                        <div className="social-links">
                            <a href="/"><FaFacebook /></a>
                            <a href="/"><FaInstagram /></a>
                            <a href="/"><FaTwitter /></a>
                            <a href="/"><FaSkype /></a>
                            <a href="/"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
