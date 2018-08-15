import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import LandingPage from './components/landing-page';
import Dashboard from './components/dashboard';
import Login from './components/login';

export default class App extends React.Component {
    render() {
        return (
        <Router>
            <div className="app">
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
            </div>
        </Router>
        );
    }
}