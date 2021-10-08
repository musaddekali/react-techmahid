import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { icon, title, desc } = service;
    return (
        <div data-aos="zoom-in" className='col-lg-4 col-md-6 mb-4'>
            <Link to="/service" className="service-box">
                <div className="service-icon">
                    <i>{icon}</i>
                </div>
                <h4>{title}</h4>
                <p>{desc}</p>
            </Link>
        </div>
    )
}

export default function Services({services}) {
    return (
        <section id="services" className="services section-padding">
            <div data-aos="fade-up" className="container">
                <div className="section-title">
                    <h2>Services</h2>
                    <h3>Check our <span className="theme-secondary-text">Services</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className="row">
                    {
                        services.map((service) => {
                            return (
                                <SingleService key={service.id} service={service} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
