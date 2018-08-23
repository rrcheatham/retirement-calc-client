import React from 'react';
import monitorPic from './monitor.PNG';

import './landing-info-monitor.css';

export default function LandingInfoMonitor(props) {
    return (
        <section id="monitorInfo">
            <h2>Monitor Your Progress</h2>
            <img src={monitorPic} alt='screenshot of savings over time' id='monitorImage' />
            <p className="description">The Good Life Tracker provides detailed information and guidence to help 
            you reach the retirement plan the works best for your future. 
            </p>
        </section>
    )
}