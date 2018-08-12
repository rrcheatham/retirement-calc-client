import React from 'react';
import targetPic from './target.PNG';

import './landing-info-target.css';

export default function LandingInfoTarget(props) {
    return (
        <section id="targetInfo">
            <h2>Target Your Savings</h2>
            <img src={targetPic} alt='screenshot of target graph' id='targetsImage' />
            <p className="description">The Good Life Tracker offers many adjustable metrics for you target the 
                perfect age, savings rate, and planned retirement expenses to help you set a savings
                goal and stick to it. 
            </p>
        </section>
    )
}