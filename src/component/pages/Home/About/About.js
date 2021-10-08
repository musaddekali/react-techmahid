import React from 'react';
import aboutImg from '../../../../images/about.jpg';
import './About.css';
import { FaGift, FaImages } from 'react-icons/fa';

export default function About() {
    return (
        <section id="about" className="about section-padding section-bg">
            <div data-aos="fade-up" className="container">
                <div className="section-title">
                    <h2>About</h2>
                    <h3>Find Out More <span className="theme-secondary-text">About Us</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img data-aos="fade-right" src={aboutImg} alt="about_us" className="img-fluid" />
                    </div>
                    <div data-aos="fade-up" className="col-lg-6 content d-flex flex-column justify-content-center pt-4 pt-lg-0">
                        <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                        <p className='fst-italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <ul>
                            <li>
                                <i><FaGift /></i>
                                <div>
                                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                    <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                                </div>
                            </li>
                            <li>
                                <i><FaImages /></i>
                                <div>
                                    <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                    <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre trade</p>
                                </div>
                            </li>
                        </ul>
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
