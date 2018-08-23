import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Header from './header';
import LandingInfoSet from './landing-info-set';
import LandingInfoTarget from './landing-info-target';
import LandingInfoMonitor from './landing-info-monitor';
import SignUpForm from './sign-up';
import Footer from './footer';

import './landing-page.css';

export function LandingPage(props) {

    if(props.loggedIn) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div>
            <Header />
            <main>
                <LandingInfoSet />
                <LandingInfoTarget />
                <LandingInfoMonitor />
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

