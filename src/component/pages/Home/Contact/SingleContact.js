import React from 'react';

export default function SingleContact({ contact }) {
    const { icon, title, address, type } = contact;
    return (
        <div data-aos="fade-up" className={`${type === 'address' ? 'col-lg-6' : 'col-lg-3 col-md-6'} mb-4`}>
            <div className="contact-box">
                <i>{icon}</i>
                <h3>{title}</h3>
                <p>{address}</p>
            </div>
        </div>
    )
}
