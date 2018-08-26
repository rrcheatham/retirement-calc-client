import React from 'react';
import {shallow} from 'enzyme';
import numeral from 'numeral';

import {Results} from './results';

describe('<Results />', () => {
    it('Renders without crashing', () => {
        shallow(<Results />);
    });

    it('should render results with formatting', () => {
        const props = {
            shortfall: 1000,
            addSavings: 10,
            reqContribution: 1000
        };
        const wrapper = shallow(<Results {...props} />);
        let shortfall = numeral(props.shortfall).format('$0,0');
        let addSavings = numeral(props.addSavings).format('$0,0');
        let reqContribution = numeral(props.reqContribution).format('0.00%');
        expect(wrapper.contains(shortfall)).toEqual(true);
        expect(wrapper.contains(addSavings)).toEqual(true);
        expect(wrapper.contains(reqContribution)).toEqual(true);
    });
    
});