import { Chart } from 'react-google-charts';
import './Dashboard.css';
function Dashboard() {
  return (
    <div id='dashboard'>
      <div className='charts'>
        <Chart
          width={'400px'}
          height={'200px'}
          backgroundColor='transparent'
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Tickets', 'by project'],
            ['Weather app', 5],
            ['To-do-list', 2],
            ['Movie with friends', 3],
            ['Jeopardy-jquery', 7],
          ]}
          options={{
            title: 'Company Ticket Distribution',
            is3D: true,
            backgroundColor: {
              fill: 'transparent',
            },
            pieSliceTextStyle: {
              color: 'black',
            },
            slices: {
              0: { color: 'green' },
              1: { color: 'purple' },
              2: { color: 'orange' },
              3: { color: 'blue' },
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
        <Chart
          width={'400px'}
          height={'200px'}
          backgroundColor='transparent'
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Tickets', 'By type'],
            ['New', 11],
            ['Unassigned', 2],
            ['Development', 2],
            ['Archived', 2],
          ]}
          options={{
            title: 'Tickets By Status',
            // Just add this option
            is3D: true,
            backgroundColor: {
              fill: 'transparent',
            },
            pieSliceTextStyle: {
              color: 'black',
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
        <Chart
          width={'400px'}
          height={'200px'}
          backgroundColor='transparent'
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Tickets', 'By priority'],
            ['Bug', 11],
            ['Task', 6],
            ['New feature', 4],
          ]}
          options={{
            title: 'Tickets By Type',
            // Just add this option
            is3D: true,
            backgroundColor: {
              fill: 'transparent',
            },
            pieSliceTextStyle: {
              color: 'black',
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
        <Chart
          width={'400px'}
          height={'200px'}
          backgroundColor='transparent'
          chartType='PieChart'
          loader={<div>Loading Chart</div>}
          data={[
            ['Task', 'Hours per Day'],
            ['low', 3],
            ['medium', 6],
            ['high', 2],
            ['urgent', 2],
          ]}
          options={{
            title: 'Tickets By Priority',
            // Just add this option
            is3D: true,
            backgroundColor: {
              fill: 'transparent',
            },
            slices: {
              0: { color: 'green' },
              1: { color: 'yellow' },
              2: { color: 'orange' },
              3: { color: 'red' },
            },
            pieSliceTextStyle: {
              color: 'black',
            },
          }}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    </div>
  );
}

export default Dashboard;
