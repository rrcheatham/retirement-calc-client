import React from 'react';
import monitorPic from './monitor.PNG';

import './landing-info-monitor.css';

export default function LandingInfoMonitor(props) {
    return (
        <section id="monitorInfo">
            <h2>Monitor Your Progress</h2>
            <img src={monitorPic} alt='screenshot of savings over time' id='monitorImage' />
            <p className="description">Detailed charts and cash flow maps help you track your progress and empower 
                your decision making. 
            </p>
        </section>
    )
}