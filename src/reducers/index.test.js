import {retirementCalcReducer} from './index';

import {
    setAge, 
    setIncome, 
    setSavings, 
    setContribution, 
    setRetirementAge,
    setExpenses,
    setTarget,
    fetchInputsSuccess,
    fetchInputsError,
    updateInputsError
} from '../actions';


describe('retirementCalcReudcer', () => {
    const ageTest = 22;
    const incomeTest = 22000;
    const savingsTest = 22000;
    const contributionTest = 22;
    const retirementAgeTest = 72;
    const expensesTest = 22000;

    const inputTest = {
        id: '123456',
        age: ageTest,
        income: incomeTest,
        savings: savingsTest,
        contribution: contributionTest,
        retirementAge: retirementAgeTest,
        expenses: expensesTest
    };

    it('Should set the initial state when nothing is passed in', () => {
        const state = retirementCalcReducer(undefined, {type: '_UNKNOWN'});
        expect(state).toEqual({
            age: 35,
            income: 75000,
            savings: 30000,
            contribution: 10,
            retirementAge: 70,
            expenses: 52500
        });
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = retirementCalcReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('fetchInputsSuccess', () => {
        it('Should update with fetched data', () => {
            let currentState = {};
            const state = retirementCalcReducer(currentState, fetchInputsSuccess(inputTest));
            expect(state).toEqual(inputTest);
        });
    });

    describe('fetchInputsError', () => {
        it('Should add error', () => {
            let currentState = {};
            let errorTest = "testing";
            const state = retirementCalcReducer(currentState, fetchInputsError(errorTest));
            expect(state).toEqual({
                error: errorTest
            });
        });
    });

    
    describe('setAge', () => {
        it('Should update the age', () => {
            let currentState = {};
            const state = retirementCalcReducer(currentState, setAge(ageTest));
            expect(state).toEqual({
                age: ageTest
            });
        });
    });

    describe('setIncome', () => {
        it('Should update the income', () => {
            let currentState = {};
            const state = retirementCalcReducer(currentState, setIncome(incomeTest));
            expect(state).toEqual({
                income: incomeTest
            });
        });
    });

    describe('setSavings', () => {
        it('Should update savings', () => {
            let currentState = {};
            const state = retirementCalcReducer(currentState, setSavings(savingsTest));
            expect(state).toEqual({
                savings: savingsTest
            });
        });
    });

    describe('setContribution', () => {
        it('Should update contribution', () => {
            let currentState = {};
            const state = retirementCalcReducer(currentState, setContribution(contributionTest));
            expect(state).toEqual({
                contribution: contributionTest
            });
        });
    });

    describe('setRetirementAge', () => {
        it('Should update the retirement age', () => {
            let currentState = {};
            const state = retirementCalcReducer(currentState, setRetirementAge(retirementAgeTest));
            expect(state).toEqual({
                retirementAge: retirementAgeTest
            });
        });
    });

    describe('setExpenses', () => {
        it('Should update expenses', () => {
            let currentState = {};
            const state = retirementCalcReducer(currentState, setExpenses(expensesTest));
            expect(state).toEqual({
                expenses: expensesTest
            });
        });
    });

    describe('setTarget', () => {
        it('Should update with target calcs', () => {
            let investYears = (retirementAgeTest - ageTest);
            let payoutYears = (90 - retirementAgeTest);
            let annualContribution = contributionTest / 100 * incomeTest;
            let futureExpenses = expensesTest * Math.pow(1.03, investYears);
            let totalNeeded = futureExpenses * payoutYears;
            let savingsFV = savingsTest * Math.pow(1.05, investYears);
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
            let reqContribution = (addSavings + annualContribution) / incomeTest;
            let state = retirementCalcReducer(inputTest, setTarget());
            expect(state).toEqual({
                id: '123456',
                age: ageTest,
                income: incomeTest,
                savings: savingsTest,
                contribution: contributionTest,
                retirementAge: retirementAgeTest,
                expenses: expensesTest,
                totalNeeded: totalNeeded,
                totalActual: totalActual,
                status: status,
                shortfall: difference,
                addSavings: addSavings,
                reqContribution: reqContribution
            });
        });
    });

    describe('updateInputsError', () => {
        it('Should add error', () => {
            let currentState = {};
            let errorTest = "testing";
            const state = retirementCalcReducer(currentState, updateInputsError(errorTest));
            expect(state).toEqual({
                error: errorTest
            });
        });
    });
});