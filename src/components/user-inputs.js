import React from 'react';
import {connect} from 'react-redux';
import './user-inputs.css';

import {setAge, setIncome, setSavings, setContribution, setRetirementAge, setExpenses, setTarget} from '../actions';

class UserInputsForm extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.dispatch(setTarget());
    }

    render() {
        return (
            <form id="userInputForm"
                onSubmit={e => this.onSubmit(e)}>
                <div className="form-input">
                    <label htmlFor="age">Age:</label>
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
                    <label htmlFor="totalSavings">Total Current Savings:</label>
                    <input 
                        name="totalSavings"
                        type="number"
                        min="0"
                        value={this.props.savings}
                        onChange={e => this.props.dispatch(setSavings(e.target.value))}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="monthlySavings">% of Salary Contributed:</label>
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
                    <label htmlFor="retirementExpenses">Annual Retirement Expenses<br />
                    (in today's dollars):
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
    age: 0, 
    income: 0,
    savings: 0,
    contribution: 10,
    retirementAge: 70,
    expenses: 0
};

export const mapStateToProps = state => ({
    age: state.age,
    income: state.income,
    savings: state.savings,
    contribution: state.contribution,
    retirementAge: state.retirementAge,
    expenses: state.expenses
});

export default connect(mapStateToProps)(UserInputsForm);

//export default reduxForm({
//    form: 'user inputs'
//})(UserInputsForm);