import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import InitialNavBar from './initial_Nav_Bar';
import LandingStart from './landing-start';
import LandingInfoSet from './landing-info-set';
import SignUpForm from './sign-up';
import Footer from './footer';

import './landing-page.css';

export function LandingPage(props) {

    if(props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <InitialNavBar />
            <main>
                <LandingStart />
                <LandingInfoSet />
                <SignUpForm />
            </main>
            <Footer />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);

