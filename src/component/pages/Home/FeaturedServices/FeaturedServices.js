import React from 'react';
import './FeaturedServices.css';
import { Link } from 'react-router-dom';

const SingleCard = ({ fservices, index }) => {
    const { icon, title, desc } = fservices;
    return (
        <div data-aos="fade-up" data-aos-delay={index * 100} className="col-lg-3 col-md-6 mb-3 mb-lg-0 d-flex align-items-stretch">
            <Link to="/featured-services-buy" className="card">
                <div className="icon">
                    {icon}
                </div>
                <h4 className="title">{title}</h4>
                <p className="desc">{desc} </p>
            </Link>
        </div>
    )
}

export default function FeaturedServices({featuredServices}) {
    return (
        <section className="featured-services section-padding">
            <div data-aos="fade-up" className="container">
                <div className="row">
                    {
                        featuredServices.map((fservices, i) => {
                            return (
                                <SingleCard key={fservices.id} index={i} fservices={fservices} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
