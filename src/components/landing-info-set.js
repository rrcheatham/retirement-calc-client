import React from 'react';
import inputPic from './inputs.PNG';

import './landing-info-set.css';

export default function LandingInfoSet(props) {
    return (
        <section id="setGoalsInfo">
            <h2>Set You Retirement Goals</h2>
            <img src={inputPic} alt='screenshot of inputs' id='inputsImage' />
            <p className="description">The Good Life Tracker evaluates your current savings, age, and income to help you plan
                for the retirement of your dreams.</p>
        </section>
    )
}