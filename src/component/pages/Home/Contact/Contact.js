import React, { useState } from 'react';
import './Contact.css';
import SingleContact from './SingleContact';

const initialContact = {
    name: '',
    email: '',
    subject: '',
    message: '',
}

export default function Contact({contact}) {
    const [formContact, setFormContact] = useState(initialContact);
    const { name, email, subject, message } = formContact;

    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setFormContact({ ...formContact, [name]: val });
    }

    // fake submit message 
    const submitContact = (e) => {
        e.preventDefault();
        if (email === '' || message === '') {
            alert('Please fill the requred field');
            return;
        }

        alert('Your message has submitted successfully');

        setTimeout(() => alert(
            `Thank You ${name}. Your Information is \n
             name : ${name} \n
             email : ${email} \n
             subject : ${subject} \n
             message : ${message} \n
        `), 2000);

        setFormContact(initialContact);
    }

    return (
        <section id="contact" className="contact section-padding">
            <div data-aos="fade-up" className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <h3 className="theme-secondary-text">Contact Us</h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className="row">
                    {
                        contact.map((contact) => {
                            return (
                                <SingleContact key={contact.id} contact={contact} />
                            )
                        })
                    }
                </div>
                <div className="row">
                    <div data-aos="fade-up" className="col-lg-6">
                        <iframe title="map" className="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{ border: "0", width: '100%', height: "384px" }} allowFullScreen="" />
                    </div>
                    <div data-aos="fade-up" className="col-lg-6">
                        <form onSubmit={submitContact} className="contact-form" action="/">
                            <div className="row">
                                <div className="col-md-6 mb-md-0 mb-4">
                                    <label htmlFor="name" className="form-label d-none"></label>
                                    <input onChange={handleChange} name="name" value={name} type="text" className="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label d-none"></label>
                                    <input onChange={handleChange} name="email" value={email} type="email" className="form-control" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <label htmlFor="subject" className="form-label"></label>
                            <input onChange={handleChange} name="subject" value={subject} type="text" id="subject" className="form-control" placeholder="Subject" />
                            <label htmlFor="message" className="form-label"></label>
                            <textarea onChange={handleChange} name="message" value={message} id="message" rows="5" className="form-control" placeholder="Message" required />
                            <div className="text-center mt-4">
                                <button className="contact-submit-btn" type="submit">Send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}
