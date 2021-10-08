import React from 'react';
import './Pricing.css';
import SinglePricing from './SinglePricing';

export default function Pricing({pricing}) {
    return (
        <section className="pricing section-padding" id="pricing">
            <div data-aos="fade-up" className="container">
                <div className="section-title">
                    <h2>Pricing</h2>
                    <h3>Check Our <span className="theme-secondary-text">Pricing</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className="row">
                    {
                        pricing.map((pricing) => {
                            return (
                                <SinglePricing id={pricing.id} key={pricing.id} pricing={pricing} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
