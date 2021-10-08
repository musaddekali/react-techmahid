import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function SingleFaq({ faq }) {
    const [active, setActive] = useState(false);
    const { ques, ans } = faq;

    const faqToggle = () => {
        setActive(!active);
    }

    return (
        <div className="faq-wrap">
            <p
                onClick={faqToggle}
                className={`faq-ques ${active ? 'active' : ''}`}>
                {ques}
                {active ? <FaChevronUp /> : <FaChevronDown />}
            </p>
            {
                active ? <p className="faq-ans">{ans}</p> : ''
            }
        </div>
    )
}
