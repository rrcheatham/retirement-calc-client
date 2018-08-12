import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import LandingPage from './components/landing-page';
import Dashboard from './components/dashboard';
import Login from './components/login';

ReactDOM.render(
    <Provider store={store}>
        <Login />
    </Provider>, 
    document.getElementById('root')
);

