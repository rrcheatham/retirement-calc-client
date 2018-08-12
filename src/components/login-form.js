import React from 'react';

import './login-form.css';

import Input from './input';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {required, nonEmpty, email} from '../validators';

export class LoginForm extends React.Component {
    render() {
        return (
            <form id='loginForm'>
                <Field 
                    name='email'
                    type='email'
                    component={Input}
                    label='Email:'
                />
                <Field
                    name='password'
                    type='text'
                    component={Input}
                    label='Password:'
                />
                <button class='btn-class' type='submit'>
                    Login
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login'
})(LoginForm);