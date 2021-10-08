import React from 'react';

export default function SinglePricing({ pricing }) {
    const { id, price, category, features } = pricing;
    return (
        <div data-aos="fade-up" data-aos-delay={id * 100} className="col-lg-3 col-md-6 mb-4">
            <div className="pricing-box">
                <span
                    className={`advanced ${category === 'ultimate' ? 'd-inline-block' : 'd-none'}`}>
                    Advanced
                </span>
                <h3 className={`${category === 'business' ? 'theme-secondary-bg text-white' : ''}`} >{category}</h3>
                <h4>
                    <sup>$</sup>
                    {price}
                    <span className="text-secondary">/month</span>
                </h4>
                <ul>
                    {
                        features.map((feature, i) => {
                           return <li key={i}>{feature}</li>
                        })
                    }
                </ul>
                <div className="pricing-cta-wrap">
                    <a href="/" className="pricing-cta">Buy now</a>
                </div>
            </div>
        </div>
    )
}
