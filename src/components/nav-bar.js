import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import logo from './ftg-logo.png';
import './nav-bar.css';

export class NavBar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }

    render() {

        return (
            <nav>
                <img id="logo" src={logo} alt='Fintech Guru Logo' />
                <div id="links">
                    <div
                        id="login" 
                        className="btn-class">
                        <a href="/login">Login</a>
                    </div>
                    <div
                        id="logout" 
                        className="btn-class"
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

export default connect(mapStateToProps)(NavBar);