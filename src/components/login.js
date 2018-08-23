import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import LoginForm from './login-form';

import './login.css';

export function Login(props) {
    if (props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

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

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Login);
