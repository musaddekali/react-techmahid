import React, { useState } from 'react';
import './Counts.css';
import CountUp from 'react-countup';
import { Waypoint } from 'react-waypoint';

const SingleCounter = ({ counter , isCounter }) => {
    const { icon, number, info } = counter;
    return (
        <div className='col-lg-3 col-md-6 mb-4 mb-lg-0'>
            <div className="count-box">
                <i>
                    {icon}
                </i>
                {
                    isCounter ? <CountUp className="counter-up" start={0} end={number} duration={2.75} /> :
                        <span className="cunter-up">{number}</span>
                }
              
                <p>{info}</p>
            </div>
        </div>
    )
}


export default function Counts({counters}) {
    const [isCounter, setIsCounter] = useState(false);
    return (
        <section className="counts section-padding">
            <div data-aos="zoom-in" className="container">
                <Waypoint
                    onEnter={() => setIsCounter(true)}
                    // onLeave={() => setIsCounter(false)}
                    bottomOffset="20%"
                >
                    <div className="row">
                        {
                            counters.map((counter, i) => {
                                return (
                                    <SingleCounter key={i} isCounter={isCounter} counter={counter} />
                                )
                            })
                        }
                    </div>
                </Waypoint>
            </div>
        </section>
    )
}
