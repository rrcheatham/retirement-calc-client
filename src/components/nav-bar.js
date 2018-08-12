import React from 'react';
import logo from './ftg-logo.png';
import './nav-bar.css';

export default function NavBar(props) {
    return (
        <nav>
            <img id="logo" src={logo} alt='Fintech Guru Logo' />
            <div id="links">
                <button id="login" class="btn-class">Login</button>
                <button id="logout" class="btn-class">Logout</button>
            </div>
        </nav>
    );
}