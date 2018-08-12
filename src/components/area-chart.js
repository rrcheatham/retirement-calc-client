import React from 'react';

import './area-chart.css';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
      {age: '40', amt: 350000},
      {age: '50', amt: 550000},
      {age: '60', amt: 650000},
      {age: '70', amt: 950000},
      {age: '80', amt: 850000},
      {age: '90', amt: 750000}
];

export default class SimpleAreaChart extends React.Component {
	render () {
  	return (
      <div id="areaChartDiv">
          <h2 id="areaChartTitle">Retirement<br />Savings Over Time</h2>
          <AreaChart width={350} height={450} data={data}
                margin={{top: 10, right: 0, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="age"/>
            
            <Tooltip/>
            <Area type='monotone' dataKey='amt' stroke='#E8210C' fill='#0C64E8' />
          </AreaChart>
      </div>
    );
  }
}

