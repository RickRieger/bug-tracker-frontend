import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';
import './Dashboard.css';
function Dashboard() {
  return (
    <div id='dashboard'>
      <div id='dashboard-sidebar-nav'></div>
      <div className='charts'>
        <Chart
          width={'500px'}
          height={'300px'}
          backgroundColor='transparent'
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
          ]}
          options={{
            title: 'My Daily Activities',
            // Just add this option
            is3D: true,
            backgroundColor: {
              fill: 'transparent',
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
        <Chart
          width={'500px'}
          height={'300px'}
          backgroundColor='transparent'
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
          ]}
          options={{
            title: 'My Daily Activities',
            // Just add this option
            is3D: true,
            backgroundColor: {
              fill: 'transparent',
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
        <Chart
          width={'500px'}
          height={'300px'}
          backgroundColor='transparent'
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
          ]}
          options={{
            title: 'My Daily Activities',
            // Just add this option
            is3D: true,
            backgroundColor: {
              fill: 'transparent',
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
        <Chart
          width={'500px'}
          height={'300px'}
          backgroundColor='transparent'
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['Work', 11],
            ['Eat', 2],
            ['Commute', 2],
            ['Watch TV', 2],
            ['Sleep', 7],
          ]}
          options={{
            title: 'My Daily Activities',
            // Just add this option
            is3D: true,
            backgroundColor: {
              fill: 'transparent',
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
