import React from 'react';
import inputPic from './inputs.PNG';
import monitorPic from './monitor.PNG';
import targetPic from './target.PNG';

import './landing-info-set.css';

export default function LandingInfoSet(props) {
    return (
        <section id="setGoalsInfo">
            <div className="infoDiv">
                <div className="textDiv">
                    <h2><span>Set</span> Your Goals</h2>
                    <p className="description">The Good Life Tracker evaluates your current savings, age, and income to help you plan
                        for your retirement needs.</p>
                </div>
                <img src={inputPic} alt='screenshot of inputs' id='inputsImage' class='infoImg'/>
            </div>
            <div className="infoDiv">
                <img src={targetPic} alt='screenshot of target graph' id='targetsImage' class='infoImg' />
                <div className="textDiv">
                    <h2><span>Target</span> Your Savings</h2>
                    <p className="description">The Good Life Tracker helps you set a savings
                        goal and stick to it. 
                    </p>
                </div>
            </div>
            <div className="infoDiv">
                <div className="textDiv">
                    <h2><span>Monitor</span> Your Progress</h2>
                    <p className="description">The Good Life Tracker provides detailed information and guidence to help 
                    you reach the retirement plan that works best for your future. 
                    </p>
                </div>
                <img src={monitorPic} alt='screenshot of savings over time' id='monitorImage' class='infoImg'/>
            </div>
            <div id="signUpLink">
                <a href="#signUpForm">Sign-up</a>
            </div>
        </section>            
    )
}