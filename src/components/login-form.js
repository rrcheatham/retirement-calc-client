import React from 'react';
import './login-form.css';
import Input from './input';
import {reduxForm, Field, focus} from 'redux-form';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.email, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        return (
            <form 
                id='loginForm'
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <Field 
                    name='email'
                    type='email'
                    id='email'
                    component={Input}
                    label='Email:'
                    validate={[required, nonEmpty]}
                />
                <Field
                    name='password'
                    id="password"
                    type='password'
                    component={Input}
                    label='Password:'
                    validate={[required, nonEmpty]}
                />
                <button 
                    className='btn-class' 
                    type='submit'
                    //disabled={this.props.pristine || this.props.submitting}
                    >
                    Login
                </button>
            </form>
            <p>Demo login - username: email@email.com, <br />
            password: password1234</p>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(LoginForm);