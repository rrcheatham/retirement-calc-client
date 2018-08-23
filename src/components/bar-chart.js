import React from 'react';
import {connect} from 'react-redux';
import './bar-chart.css';
import { BarChart, Bar, CartesianGrid, Tooltip, Legend } from 'recharts';

export function SimpleBarChart(props) {
      const data = [
            {name: 'Savings', target: props.totalNeeded, projected: props.totalActual}
      ];
  	return (
      <div id="barChartDiv">
            <h2 id="barChartTitle">Projected vs. Target<br />Retirement Savings</h2>
            <BarChart width={350} height={450} data={data}
                  margin={{top: 55, right: 30, left: 20, bottom: 5}}>
                  <CartesianGrid strokeDasharray="3 3"/>
                  <Tooltip/>
                  <Legend width={200} wrapperStyle={{ top: 0, left: 70, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}/>
                  <Bar dataKey="target" fill="#82ca9d" label="target"/>
                  <Bar dataKey="projected" fill="#E8210C" />
            </BarChart>
      </div>
    );
}

SimpleBarChart.defaultProps = {
      totalActual: 0,
      totalNeeded: 0
};

export const mapStateToProps = state => ({
      totalActual: state.calc.totalActual,
      totalNeeded: state.calc.totalNeeded
});

export default connect(mapStateToProps)(SimpleBarChart);

