import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './dashNavBar.css';

export class DashNavBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {

        return (
            <nav id="dashNav">
                <div id="dashNavLeft">
                    the<span id="titleSpan">Good</span>Life
                </div>
                <div id="dashNavMid">
                    a retirement planning app
                </div>
                <div id="dashNavRight">
                    <div id="logoutTop"
                    onClick={() => this.logOut()}>
                    Logout
                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(DashNavBar);