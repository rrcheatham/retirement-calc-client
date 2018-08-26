import React from 'react';
import {shallow} from 'enzyme';

import LandingInfoTarget from './landing-info-target';

describe('<LandingInfoTarget />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingInfoTarget />);
    });
});