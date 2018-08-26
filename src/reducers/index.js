import {
    SET_AGE, 
    SET_INCOME, 
    SET_SAVINGS, 
    SET_CONTRIBUTION, 
    SET_RETIREMENT_AGE,
    SET_EXPENSES,
    SET_TARGET,
    FETCH_INPUTS_SUCCESS,
    FETCH_INPUTS_ERROR,
    UPDATE_INPUTS_ERROR
} from '../actions';

const initialState = {
    age: 35,
    income: 75000,
    savings: 30000,
    contribution: 10,
    retirementAge: 70,
    expenses: 52500
};

export const retirementCalcReducer = (state=initialState, action) => {
    if (action.type === FETCH_INPUTS_SUCCESS) {
        return Object.assign({}, state, {
           id: action.data.id,
           age: action.data.age,
           income: action.data.income,
           savings: action.data.savings,
           contribution: action.data.contribution,
           retirementAge: action.data.retirementAge,
           expenses: action.data.expenses
        });
    }

    if (action.type === FETCH_INPUTS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    if (action.type === SET_AGE) {
        return Object.assign({}, state, {
            age: action.age
        });
    }
    else if (action.type === SET_INCOME) {
        return Object.assign({}, state, {
            income: action.income
        });
    }
    else if (action.type === SET_SAVINGS) {
        return Object.assign({}, state, {
            savings: action.savings
        });
    }
    else if (action.type === SET_CONTRIBUTION) {
        return Object.assign({}, state, {
            contribution: action.contribution
        });
    }
    else if (action.type === SET_RETIREMENT_AGE) {
        return Object.assign({}, state, {
            retirementAge: action.retirementAge
        });
    }
    else if (action.type === SET_EXPENSES) {
        return Object.assign({}, state, {
            expenses: action.expenses
        });
    }
    else if (action.type === SET_TARGET) {
        let investYears = (state.retirementAge - state.age);
        let payoutYears = (90 - state.retirementAge);
        let annualContribution = state.contribution / 100 * state.income;
        let futureExpenses = state.expenses * Math.pow(1.03, investYears);
        let totalNeeded = futureExpenses * payoutYears;
        let savingsFV = state.savings * Math.pow(1.05, investYears);
        let contributionFV = annualContribution * (Math.pow(1.02, investYears) - Math.pow(1.05, investYears)) / (.02  - .05);
        let totalActual = contributionFV + savingsFV;
        let difference = totalNeeded - totalActual;
        let status;
        if (difference <= 0) {
            status = "On Track!";
        } else if (difference <= 150000) {
            status = "Almost There!";
        } else if (difference <= 250000) {
            status = "Needs Work."
        } else {
            status = "In Trouble"
        }
        let addSavings = difference / ((Math.pow(1.02, investYears) - Math.pow(1.05, investYears)) / (.02 - .05));
        let reqContribution = (addSavings + annualContribution) / state.income;
        return Object.assign({}, state, {
            totalNeeded: totalNeeded,
            totalActual: totalActual,
            status: status,
            shortfall: difference,
            addSavings: addSavings,
            reqContribution: reqContribution
        });
    }
    else if(action.type === UPDATE_INPUTS_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }
    return state;
};