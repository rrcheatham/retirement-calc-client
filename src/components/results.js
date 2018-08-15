import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';

import './results.css';

export function Results(props) {
    let shortfall = numeral(props.shortfall).format('$0,0');
    let addSavings = numeral(props.addSavings).format('$0,0');
    let reqContribution = numeral(props.reqContribution).format('0.00%');
    return (
        <div id="resultsDiv">
            <p>Retirement Shortfall:<br />
            {shortfall}<br />
            Additional Annual Savings Needed:<br />
            {addSavings}<br />
            % of Salary to Save to Reach Goal:<br />
            {reqContribution}</p>
        </div>
    );
}

Results.defaultProps = {
    shortfall: 0,
    addSavings: 0,
    reqContribution: 0
};

export const mapStateToProps = state => ({
    shortfall: state.shortfall,
    addSavings: state.addSavings,
    reqContribution: state.reqContribution
});

export default connect(mapStateToProps)(Results);
