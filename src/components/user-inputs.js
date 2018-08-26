import React from 'react';
import {connect} from 'react-redux';
import './user-inputs.css';
import {fetchInputs, updateInputs} from '../actions/index';

import {setAge, setIncome, setSavings, setContribution, setRetirementAge, setExpenses, setTarget} from '../actions';

export class UserInputsForm extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchInputs());
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.dispatch(setTarget());
        this.props.dispatch(updateInputs());
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="fetch-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form id="userInputForm"
                onSubmit={e => this.onSubmit(e)}>
                {error}
                <div className="form-input">
                    <label htmlFor="age">
                        Age:
                    </label>
                    <input 
                        name="age"
                        type="number"
                        min="0"
                        value={this.props.age}
                        onChange={e => this.props.dispatch(setAge(e.target.value))}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="income">Yearly Income:</label>
                    <input 
                        name="income"
                        type="number"
                        min="0"
                        value={this.props.income}
                        onChange={e => this.props.dispatch(setIncome(e.target.value))}
                    />
                </div>
                <div className="form-input">
                    <label className="tooltip" htmlFor="totalSavings">
                        Total Current Savings:
                        <span className="tooltiptext">Include cash value of any assets that you will sell to fund retirement</span>
                    </label>
                    <input 
                        name="totalSavings"
                        type="number"
                        min="0"
                        value={this.props.savings}
                        onChange={e => this.props.dispatch(setSavings(e.target.value))}
                    />
                </div>
                <div className="form-input">
                    <label className="tooltip" htmlFor="monthlySavings">
                        % of Salary Contributed:
                        <span className="tooltiptext">You should target at least 10% of your salary each year</span>
                    </label>
                    <input 
                        name="monthlySavings"
                        type="number"
                        min="0"
                        max="100" 
                        value={this.props.contribution}
                        onChange={e => this.props.dispatch(setContribution(e.target.value))}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="retirementAge">Retirement Age:</label>
                    <input 
                        name="retirementAge"
                        type="number"
                        min="0"
                        value={this.props.retirementAge}
                        onChange={e => this.props.dispatch(setRetirementAge(e.target.value))}
                    />
                </div>
                <div className="form-input">
                    <label className="tooltip" htmlFor="retirementExpenses">
                        Annual Retirement Expenses<br />
                        (in today's dollars):
                        <span className="tooltiptext">A general rule of thumb is 70% of your current salary</span>
                    </label>
                    <input 
                        name="retirementExpenses"
                        type="number"
                        min="0"
                        value={this.props.expenses}
                        onChange={e => this.props.dispatch(setExpenses(e.target.value))}
                    />
                </div>
                <button 
                    type="submit"
                    className="btn-class"
                >
                Submit    
                </button>
            </form>
        );
    }
}

UserInputsForm.defaultProps = {
    age: 100, 
    income: 100,
    savings: 100,
    contribution: 10,
    retirementAge: 70,
    expenses: 100
};

export const mapStateToProps = state => ({
    age: state.calc.age,
    income: state.calc.income,
    savings: state.calc.savings,
    contribution: state.calc.contribution,
    retirementAge: state.calc.retirementAge,
    expenses: state.calc.expenses,
    error: state.calc.error,
    data: state.calc.data,
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(UserInputsForm);

