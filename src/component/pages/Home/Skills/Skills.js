import React, { useState } from 'react';
import './Skills.css';
import { Waypoint } from 'react-waypoint';

const SingleSkill = ({ skill, isSkill }) => {
    const { skillName, progress } = skill;
    return (
        <div className="progress-wrapper">
            <span className="skill">{skillName}</span>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${isSkill ? progress : 0}%` }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
            </div>
        </div>
    )
}

export default function Skills({skills}) {
    const [isSkill, setIsSkill] = useState(false);
    const skillHalf = skills.length / 2;
    return (
        <section className="skills section-padding">
            <div data-aos="fade-up" className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                    <h3>Checked out <span className="theme-secondary-text">Our skills</span></h3>
                </div>
                <Waypoint
                    onEnter={() => setIsSkill(true)}
                    // enable onLeave if you want to call animation multiple times
                    // onLeave={() => setIsSkill(false)}
                    bottomOffset="20%"
                >
                    <div className="row">
                        <div className="col-lg-6">
                            {
                                skills.slice(0, skillHalf).map((skill) => {
                                    return (
                                        <SingleSkill isSkill={isSkill} key={skill.id} skill={skill} />
                                    )
                                })
                            }
                        </div>
                        <div className="col-lg-6">
                            {
                                skills.slice(skillHalf).map((skill) => {
                                    return (
                                        <SingleSkill isSkill={isSkill} key={skill.id} skill={skill} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </Waypoint>
            </div>
        </section>
    )
}
