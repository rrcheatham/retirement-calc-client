import {
    setAge,
    SET_AGE, 
    setIncome,
    SET_INCOME, 
    setSavings,
    SET_SAVINGS, 
    setContribution,
    SET_CONTRIBUTION, 
    setRetirementAge,
    SET_RETIREMENT_AGE,
    setExpenses,
    SET_EXPENSES,
    setTarget,
    SET_TARGET,
    fetchInputsSuccess,
    FETCH_INPUTS_SUCCESS,
    fetchInputsError,
    FETCH_INPUTS_ERROR,
    updateInputsError,
    UPDATE_INPUTS_ERROR
} from './index';


describe('fetchInputSuccess', () => {
    it('Should return the action', () => {
        const data = {
            data: test
        };
        const action = fetchInputsSuccess(data);
        expect(action.type).toEqual(FETCH_INPUTS_SUCCESS);
        expect(action.data).toEqual(data);
    });
});

describe('setAge', () => {
    it('Should return the action', () => {
        const age = 22;
        const action = setAge(age);
        expect(action.type).toEqual(SET_AGE);
        expect(action.age).toEqual(age);
    });
});

describe('setIncome', () => {
    it('Should return the action', () => {
        const income = 22000;
        const action = setIncome(income);
        expect(action.type).toEqual(SET_INCOME);
        expect(action.income).toEqual(income);
    });
});

describe('setSavings', () => {
    it('Should return the action', () => {
        const savings = 22000;
        const action = setSavings(savings);
        expect(action.type).toEqual(SET_SAVINGS);
        expect(action.savings).toEqual(savings);
    });
});

describe('setContribution', () => {
    it('Should return the action', () => {
        const contribution  = 20;
        const action = setContribution(contribution);
        expect(action.type).toEqual(SET_CONTRIBUTION);
        expect(action.contribution).toEqual(contribution);
    });
});

describe('setRetirementAge', () => {
    it('Should return the action', () => {
        const reatirementAge = 72;
        const action = setRetirementAge(reatirementAge);
        expect(action.type).toEqual(SET_RETIREMENT_AGE);
        expect(action.retirementAge).toEqual(reatirementAge);
    });
});

describe('setExpenses', () => {
    it('Should return the action', () => {
        const expenses = 22000;
        const action = setExpenses(expenses);
        expect(action.type).toEqual(SET_EXPENSES);
        expect(action.expenses).toEqual(expenses);
    });
});

describe('setTarget', () => {
    it('Should return the action', () => {
        const action = setTarget();
        expect(action.type).toEqual(SET_TARGET);
    });
});

describe('fetchInputsError', () => {
    it('Should return the action', () => {
        const error = "testing";
        const action = fetchInputsError(error);
        expect(action.type).toEqual(FETCH_INPUTS_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('updateInputsError', () => {
    it('Should return the action', () => {
        const error = "testing";
        const action = updateInputsError(error);
        expect(action.type).toEqual(UPDATE_INPUTS_ERROR);
        expect(action.error).toEqual(error);
    });
});