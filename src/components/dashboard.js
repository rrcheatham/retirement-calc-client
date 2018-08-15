import React from 'react';

import './dashboard.css';

import Header from './header';
import Footer from './footer';
import UserInputsForm from './user-inputs';
import SimpleBarChart from './bar-chart';
import Feedback from './feedback';
import Results from './results';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <UserInputsForm />
                    <Feedback />
                    <SimpleBarChart />
                    <Results />
                </main>
                <Footer />
            </div>
        );
    }
}