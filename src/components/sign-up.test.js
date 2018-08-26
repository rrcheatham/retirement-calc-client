import React from 'react';
import {shallow} from 'enzyme';

import {SignUpForm} from './sign-up';

describe('<SignUpForm />', () => {
    it('Renders without crashing', () => {
        const dispatch = jest.fn();
        shallow(<SignUpForm handleSubmit={dispatch}/>);
    });

    it('Should fire onSubmit callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = shallow(<SignUpForm handleSubmit={callback} />);
        const email = 'example@email.com';
        const password = 'password1234';
        const firstName = 'John';
        const lastName = 'Doe'
        wrapper.simulate('submit', { email: email, password: password, firstName: firstName, lastName: lastName});
        expect(callback).toHaveBeenCalled();
    });
});