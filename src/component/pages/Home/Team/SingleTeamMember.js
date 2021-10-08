import React from 'react';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
} from 'react-icons/fa';

const SingleTeamMember = ({ team }) => {
    const {id, name, image, category } = team;
    return (
        <div data-aos="fade-up" data-aos-delay={id * 100} className="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div className="team-member">
                <div className="team-member-img">
                    <img src={image} alt={name} className="img-fluid" />
                    <div className="team-member-socials">
                        <a href="/"><FaFacebook /></a>
                        <a href="/"><FaInstagram /></a>
                        <a href="/"><FaTwitter /></a>
                        <a href="/"><FaLinkedin /></a>
                    </div>
                </div>
                <div className="team-member-info">
                    <h4>{name}</h4>
                    <span className="text-secondary">{category}</span>
                </div>
            </div>
        </div>
    )
}

export default SingleTeamMember;