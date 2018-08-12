import React from 'react';

import Header from './header';
import LandingInfoSet from './landing-info-set';
import LandingInfoTarget from './landing-info-target';
import LandingInfoMonitor from './landing-info-monitor';
import SignUpForm from './sign-up';
import Footer from './footer';

import './landing-page.css';

export default class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
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
}

