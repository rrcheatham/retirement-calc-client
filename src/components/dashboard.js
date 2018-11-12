import React from 'react';

import './dashboard.css';

import DashNavBar from './dashNavBar';
import Footer from './footer';
import UserInputsForm from './user-inputs';
import SimpleBarChart from './bar-chart';
import Feedback from './feedback';
import Results from './results';
import requiresLogin from './requires-login';

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <DashNavBar />
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

export default requiresLogin()(Dashboard);