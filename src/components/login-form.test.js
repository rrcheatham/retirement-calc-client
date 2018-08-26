import React from 'react';
import {shallow, mount} from 'enzyme';

import {LoginForm} from './login-form';

describe('<LoginForm />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<LoginForm handleSubmit={dispatch}/>);
    });

    it('Should display error if one is returned', () => {
        const dispatch = jest.fn();
        const props ={
            handleSubmit: dispatch,
            error: "testing"
        };
        const wrapper = shallow(<LoginForm {...props} />);
        expect(wrapper.contains(props.error)).toEqual(true);
    });

    it('Should fire onSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = shallow(<LoginForm handleSubmit={callback} />);
        const email = 'example@email.com';
        const password = 'password1234';
        wrapper.simulate('submit', { email: email, password: password});
        expect(callback).toHaveBeenCalled();
    });
});