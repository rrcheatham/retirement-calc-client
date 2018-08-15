import React from 'react';
import logo from './ftg-logo.png';
import './nav-bar.css';

export default function NavBar(props) {
    return (
        <nav>
            <img id="logo" src={logo} alt='Fintech Guru Logo' />
            <div id="links">
                <button id="login" className="btn-class"><a href="/login">Login</a></button>
                <button id="logout" className="btn-class">Logout</button>
            </div>
        </nav>
    );
}