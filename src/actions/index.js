import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_INPUTS_SUCCESS = 'FETCH_PROTECTED_DATA_SUCCESS';
export const fetchInputsSuccess = data => ({
    type: FETCH_INPUTS_SUCCESS,
    data
});

export const FETCH_INPUTS_ERROR = 'FETCH_PROTECTED_DATA_ERROR';
export const fetchInputsError = error => ({
    type: FETCH_INPUTS_ERROR,
    error
});

export const fetchInputs = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const email = getState().auth.currentUser.email;
    return fetch(`${API_BASE_URL}/inputs?email=${email}`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        },
        cache: 'no-cache'
    })
        .then(res => res.json())   
        .then(response => {
            console.log('Success:', JSON.stringify(response));
            dispatch(fetchInputsSuccess(response.inputs[0]));
        })
        //.then(res => normalizeResponseErrors(res))
        //.then(res => res.json())
        //.then(res => dispatch(fetchInputsSuccess(res)))
        .catch(err => {
            //dispatch(fetchInputsError(err));
            console.log(err);
        });
};


export const SET_AGE = 'SET_AGE';
export const setAge = age => ({
    type: SET_AGE,
    age
});

export const SET_INCOME = 'SET_INCOME';
export const setIncome = income => ({
    type: SET_INCOME,
    income
});

export const SET_SAVINGS = 'SET_SAVINGS';
export const setSavings = savings => ({
    type: SET_SAVINGS,
    savings
});

export const SET_CONTRIBUTION = 'SET_CONTRIBUTION';
export const setContribution = contribution => ({
    type: SET_CONTRIBUTION,
    contribution
});

export const SET_RETIREMENT_AGE = 'SET_RETIREMENT_AGE';
export const setRetirementAge = retirementAge => ({
    type: SET_RETIREMENT_AGE,
    retirementAge
});

export const SET_EXPENSES = 'SET_EXPENSES';
export const setExpenses = expenses => ({
    type: SET_EXPENSES,
    expenses
});

export const SET_TARGET = 'SET_TARGET';
export const setTarget = () => ({
    type: SET_TARGET
});

export const UPDATE_INPUTS_ERROR = 'UPDATE_INPUTS_ERROR';
export const updateInputsError = error => ({
    type: UPDATE_INPUTS_ERROR,
    error
});

export const updateInputs = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const id = getState().calc.id;
    const age = getState().calc.age;
    const income = getState().calc.income;
    const retirementAge = getState().calc.retirementAge;
    const contribution = getState().calc.contribution;
    const savings = getState().calc.savings;
    const expenses = getState().calc.expenses;
    const data = {
        id: id,
        age: age,
        income: income,
        retirementAge: retirementAge,
        contribution: contribution,
        savings: savings,
        expenses: expenses
    };
    return fetch(`${API_BASE_URL}/inputs/${id}`, {
        method: 'PUT',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => normalizeResponseErrors(res))
        //.then(res => res.json())
        //.then(({data}) => dispatch(updateInputsSuccess(data)))
        .catch(err => {
            console.log(err);
            dispatch(updateInputsError(err.message));
        });
};