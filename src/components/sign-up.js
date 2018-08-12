import React from 'react';
import Input from './input';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {required, nonEmpty, email} from '../validators';


import './sign-up.css';

export class SignUpForm extends React.Component {
    render() {
        return (
            <form id="signUpForm">
                <Field 
                    name="firstName"
                    type="text"
                    component={Input}
                    label="First Name:"
                    placeholder="First Name"
                />
                <Field
                    name="lastName"
                    type="text"
                    component={Input}
                    label="Last Name:"
                    placeholder="Last Name"
                />
                <Field
                    name="email"
                    type="email"
                    component={Input}
                    label="Email:"
                    placeholder="Email"
                />
                <Field
                    name="password"
                    type="text"
                    component={Input}
                    label="Password:"
                    placeholder="Password"
                />
                <Field
                    name="conformPassword"
                    type="text"
                    component={Input}
                    label="Confirm Password:"
                    placeholder="Confirm Password"
                />
                <button
                    type="submit"
                    class="btn-class"
                >
                Start Planning
                </button>
                <p>Already have an account? <a href="#">Sign In</a></p>
            </form>
        );
    }
}

export default reduxForm({
    form: 'sign-up'
})(SignUpForm);