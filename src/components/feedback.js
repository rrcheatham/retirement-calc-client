import React from 'react';
import {connect} from 'react-redux';

import './feedback.css';

export function Feedback(props) {
    return (
        <h1 id="feedback">Status: <span id="status">{props.status}</span></h1>
    );
}

Feedback.defaultProps = {
    status: 'Submit Inputs'
};

export const mapStateToProps = state => ({
    status: state.calc.status
});

export default connect(mapStateToProps)(Feedback);
