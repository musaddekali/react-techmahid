import React from 'react';
import './Team.css';
import SingleTeamMember from './SingleTeamMember';

export default function Team({teams}) {
    return (
        <section id="team" className="team section-padding section-bg">
            <div data-aos="fade-up" className="container">
                <div className="section-title">
                    <h2>Team</h2>
                    <h3>Our hardworking <span className="theme-secondary-text">Team</span></h3>
                    <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                </div>
                <div className="row">
                    {
                        teams.map((team) => {
                            return (
                                <SingleTeamMember
                                    id={team.id}
                                    team={team}
                                    key={team.id}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
