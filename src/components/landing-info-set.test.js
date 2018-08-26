import React from 'react';
import {shallow} from 'enzyme';

import LandingInfoSet from './landing-info-set';

describe('<LandingInfoSet />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingInfoSet />);
    });
});