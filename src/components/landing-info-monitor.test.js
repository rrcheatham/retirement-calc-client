import React from 'react';
import {shallow} from 'enzyme';

import LandingInfoMonitor from './landing-info-monitor';

describe('<LandingInfoMonitor />', () => {
    it('Renders without crashing', () => {
        shallow(<LandingInfoMonitor />);
    });
});