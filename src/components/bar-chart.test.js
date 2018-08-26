import React from 'react';
import {shallow, mount} from 'enzyme';

import {SimpleBarChart} from './bar-chart';

describe('<BarChart />', () => {
    it('Renders without crashing', () => {
        shallow(<SimpleBarChart />);
    });
});
