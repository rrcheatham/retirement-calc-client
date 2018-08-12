import {
    SET_AGE, 
    SET_INCOME, 
    SET_SAVINGS, 
    SET_CONTRIBUTION, 
    SET_RETIREMENT_AGE,
    SET_EXPENSES
} from '../actions';

const initialState = {
    age: 35,
    income: 75000,
    savings: 30000,
    contribution: 10,
    retirementAge: 70,
    expenses: 4375
};

export const retirementCalcReducer = (state=initialState, action) => {
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
    return state;
};