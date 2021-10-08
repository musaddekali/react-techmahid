import React from 'react';
import './Clients.css';

export default function Clients({clients}) {
    return (
        <section className="clients section-bg">
            <div data-aos="zoom-in" className="container">
                <div className="row">
                    {
                        clients.map((client) => {
                            return (
                                <div key={client.id} className="col-lg-2 col-md-4 col-6 d-flex justify-content-center align-items-center">
                                    <img src={client.image} alt="client" className="img-fluid" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
