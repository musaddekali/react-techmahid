import React, { useState } from 'react';

const initialEmail = {
    email: '',
}

export default function NewsLetter() {
    const [newsletter, setNewsletter] = useState(initialEmail);

    const handleChange = (e) => {
        const name = e.target.name;
        const val = e.target.value;
        setNewsletter({[name]: val });
    }

    const submitContact = (e) => {
        e.preventDefault();
        if (newsletter.email === '') {
            alert('Please enter your email or contact');
            return;
        }
        alert(`Your contact has submitted successfully \n ${newsletter.email}`);
        setNewsletter(initialEmail);
    }

    const { email } = newsletter;

    return (
        <div className="footer-newsletter section-bg">
            <div data-aos="fade-up" className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h4>Join Our Newsletter</h4>
                        <p>Lamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form onSubmit={submitContact} action="/" className="footer-newsletter-form">
                            <input onChange={handleChange} type="email" name="email" value={email} placeholder='example@gmail.com' />
                            <input type="submit" value='Subscribe' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
