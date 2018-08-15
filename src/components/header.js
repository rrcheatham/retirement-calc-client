import React from 'react';

import NavBar from './nav-bar';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <NavBar />
            <h1 className="title">The <span>GOOD LIFE</span> Tracker</h1>
            <h2 className="subtitle">a retirement planning app</h2>
        </header>
    );
}