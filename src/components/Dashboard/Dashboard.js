import React, { useEffect, useState } from 'react';
import Axios from '../utils/Axios';
import { Link, NavLink } from 'react-router-dom';
import { Chart } from 'react-google-charts';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './Dashboard.css';
import moment from 'moment';
function Dashboard() {
  const [projects, setProjects] = useState({});
  useEffect(() => {
    getAllProjects();
  }, []);

  async function getAllProjects() {
    try {
      let result = await Axios.get('/api/project/get-all-projects');
      setProjects(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  console.log(projects, '<===projjects');

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
      <Link to='/create-project'>
        <button>create new project</button>
      </Link>
      <br></br>
      <div className='projects'>
        <Table style={{ backgroundColor: 'gray', width: '1000px' }}>
          <Thead>
            <Tr>
              <Th>Project Title</Th>
              <Th>Start Date</Th>
              <Th>End Date</Th>
              <Th>Number of developers assigned</Th>
              <Th>Tickets assigned</Th>
            </Tr>
          </Thead>
          <Tbody>
            {projects.length > 0 ? (
              projects.map((project, index) => {
                return (
                  <Tr key={index}>
                    <Td>{project.name}</Td>
                    <Td>{moment(project.startDate).format('ll')}</Td>
                    <Td>{moment(project.endDate).format('ll')}</Td>
                    <Td>{project.developer.length}</Td>
                    <Td>{project.tickets.length}</Td>
                    <Td>
                      <Link>details</Link>
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <p>data not present </p>
            )}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}

export default Dashboard;
