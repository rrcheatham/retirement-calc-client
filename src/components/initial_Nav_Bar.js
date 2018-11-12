import React from 'react';

import './initial_Nav_Bar.css';

export default function InitialNavBar(props) {
    return (
        <nav id="initialNav">
            <div id="navLeft">
                the<span id="titleSpan">Good</span>Life
            </div>
            <div id="navMid">
                a retirement planning app
            </div>
            <div id="navRight">
                <a id="loginTop" href="/login">LOGIN</a>
            </div>
        </nav>
    );
}