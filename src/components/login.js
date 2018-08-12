import React from 'react';

import Header from './header';
import Footer from './footer';
import LoginForm from './login-form';

import './login.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <LoginForm />
                </main>
                <Footer />
            </div>
        );
    }
}