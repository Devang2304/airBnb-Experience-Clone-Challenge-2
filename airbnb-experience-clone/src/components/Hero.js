import React from 'react';
import heroimage from './images/heroimage.png';

export default function Hero() {
    return(
        <div>
            <section className="hero">
            <img className="hero--photo" src={heroimage} />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by<br/>
                one-of-a-kind hosts-all without leaving<br/>home.</p>
            </section>
        </div>
    )
}