import React from 'react';
import {shallow, mount} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });

    it('Renders the status', () => {
        const status = 'testing';
        const wrapper = shallow(<Feedback status={status}/>);
        expect(wrapper.text()).toEqual(`Status: ${status}`);
    });
});

