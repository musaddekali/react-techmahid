import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const SingleTestimonial = ({ testimonial }) => {
    const { image, name, cat, desc } = testimonial;
    return (
        <div className="testimonial-item">
            <img src={image} alt="testimonial" className="testimonial-img" />
            <h3>{name}</h3>
            <h4>{cat}</h4>
            <p>
                <i className="quote-left"><FaQuoteLeft /></i>
                {desc}
                <i className="quite-right"> <FaQuoteRight /></i>
            </p>
        </div>
    )
}

export default SingleTestimonial;
