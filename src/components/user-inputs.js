import React from 'react';
import {connect} from 'react-redux';
import './user-inputs.css';
import Input from './input';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import {required, nonEmpty, email} from '../validators';

export class UserInputsForm extends React.Component {
    render() {
        return (
            <form id="userInputForm">
                <Field
                    name="age"
                    type="number"
                    component={Input}
                    label="Age:"
                />
                <Field
                    name="income"
                    type="number"
                    component={Input}
                    label="Yearly Income:"
                />
                <Field
                    name="totalSavings"
                    type="number"
                    component={Input}
                    label="Total Current Savings:"
                />
                <Field
                    name="monthlySavings"
                    type="number"
                    component={Input}
                    label="% of Salary Contributed:"
                />
                <Field
                    name="retirementAge"
                    type="number"
                    component={Input}
                    label="Retirement Age:"
                />
                <Field  
                    name="monthlyExpenses"
                    type="number"
                    component={Input}
                    label="Monthly Retirement Expenses:"
                />
                <button 
                    type="submit"
                    class="btn-class"
                >
                Submit    
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'user inputs'
})(UserInputsForm);