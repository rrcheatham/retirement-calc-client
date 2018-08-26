import React from 'react';
import {shallow, mount} from 'enzyme';

import Input from './input';

describe('<Input />', () => {
    const props = {
        meta: {
            touched: false,
            
        },
        input: {
            name: 'test'
        },
        type: 'text',
        label: 'text'
    };

    it('Renders without crashing', () => {
        shallow(<Input {...props} />);
    });
    
});