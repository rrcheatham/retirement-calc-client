import React from 'react';

import './landing-start.css';

export default function LandingStart(props) {
    return (
        <section id="start">
            <h1>Prepare for the Retirement of Your Dreams</h1>
            <div id="startLinks">
                <a href="#signUpForm">Sign-up</a>
                <a href='/login'>Login</a>
            </div>
            <div id="learnMore">
                <a href="#setGoalsInfo">learn more</a>
            </div>
        </section>
    );
}