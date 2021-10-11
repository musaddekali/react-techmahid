import React from 'react';
import './Faq.css';
import SingleFaq from './SingleFaq';

export default function Faq({faq}) {
    return (
        <section className="faq section-padding section-bg">
            <div data-aos="fade-up" className="container">
            <div className="section-title">
                <h2>F.A.Q</h2>
                <h3>Frequently Asked <span className="theme-secondary-text">Questions</span></h3>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
            </div>
                {
                    faq.map((faq) => {
                        return (
                            <SingleFaq key={faq.id} faq={faq} />
                        )
                    })
                }
            </div>
        </section>
    )
}
