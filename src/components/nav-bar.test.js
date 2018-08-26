import React from 'react';
import {shallow} from 'enzyme';

import {NavBar} from './nav-bar';

describe('<NavBar />', () => {
    it('Renders without crashing', () => {
        shallow(<NavBar />);
    });

    it('Should fire logOut callback when button is clicked', () => {
        const callback = jest.fn();
        const wrapper = shallow(<NavBar dispatch={callback} />);
        wrapper.find('#logout').simulate('click');
        expect(callback).toHaveBeenCalled();
    });
    
});