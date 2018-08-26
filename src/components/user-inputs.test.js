import React from 'react';
import {shallow, mount} from 'enzyme';

import {UserInputsForm} from './user-inputs';
import {fetchInputs, updateInputs} from '../actions/index';
import {setAge, setIncome, setSavings, setContribution, setRetirementAge, setExpenses, setTarget} from '../actions';

describe('<UserInputsForm />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<UserInputsForm dispatch={dispatch}/>);
    });

    it('Dispatches fetchInputs', () => {
        const dispatch = jest.fn();
        shallow(<UserInputsForm dispatch={dispatch}/>);
        expect(dispatch).toHaveBeenCalled();
    });

    it('Should fire onSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<UserInputsForm dispatch={callback} />);
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalled();
    });

    it('Should dispatch setAge when Age is changed', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<UserInputsForm dispatch={dispatch} />);
        wrapper.find('input[name="age"]').simulate('change');
        expect(dispatch).toHaveBeenCalled();
    });

    it('Should dispatch setIncome when income is changed', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<UserInputsForm dispatch={dispatch} />);
        wrapper.find('input[name="income"]').simulate('change');
        expect(dispatch).toHaveBeenCalled();
    });

    it('Should dispatch setSavings when savings is changed', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<UserInputsForm dispatch={dispatch} />);
        wrapper.find('input[name="totalSavings"]').simulate('change');
        expect(dispatch).toHaveBeenCalled();
    });

    it('Should dispatch setContribution when contribution is changed', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<UserInputsForm dispatch={dispatch} />);
        wrapper.find('input[name="monthlySavings"]').simulate('change');
        expect(dispatch).toHaveBeenCalled();
    });

    it('Should dispatch setRetirementAge when retirementAge is changed', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<UserInputsForm dispatch={dispatch} />);
        wrapper.find('input[name="retirementAge"]').simulate('change');
        expect(dispatch).toHaveBeenCalled();
    });

    it('Should dispatch setExpenses when expenses is changed', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<UserInputsForm dispatch={dispatch} />);
        wrapper.find('input[name="retirementExpenses"]').simulate('change');
        expect(dispatch).toHaveBeenCalled();
    });
});