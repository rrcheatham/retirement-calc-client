import React from 'react';
import Input from './input';
import {reduxForm, Field, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import {required, nonEmpty, email, matches, length, isTrimmed} from '../validators';

import './sign-up.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {
    onSubmit(values) {
        const {email, password, firstName, lastName} = values;
        const user = {email, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(email, password)));
    }
    render() {
        return (
            <form 
                id="signUpForm"
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <div id="formTitle">
                    Sign-up and Start Planning Now!
                </div>
                <Field 
                    name="firstName"
                    type="text"
                    component={Input}
                    label="First Name:"
                    placeholder="First Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="lastName"
                    type="text"
                    component={Input}
                    label="Last Name:"
                    placeholder="Last Name"
                    validate={[required, nonEmpty]}
                />
                <Field
                    name="email"
                    type="email"
                    component={Input}
                    label="Email:"
                    placeholder="Email"
                    validate={[required, nonEmpty, email, isTrimmed]}
                />
                <Field
                    name="password"
                    type="password"
                    component={Input}
                    label="Password:"
                    placeholder="Password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <Field
                    name="conformPassword"
                    type="password"
                    component={Input}
                    label="Confirm Password:"
                    placeholder="Confirm Password"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}
                >
                Get Started
                </button>
                <p>Already have an account? <a id='loginLink' href="/login">Sign In</a></p>
            </form>
        );
    }
}

export default reduxForm({
    form: 'sign-up',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('sign-up', Object.keys(errors)[0]))
})(SignUpForm);