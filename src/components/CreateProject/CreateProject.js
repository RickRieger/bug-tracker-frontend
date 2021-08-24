import React, { useState } from 'react';
import Axios from '../utils/Axios';
import useProjectFormHooks from '../hooks/useProjectFormHooks';

function CreateProject() {
  const [name, handleNameOnChange] = useProjectFormHooks('project name');
  const [description, handleDescOnChange] = useProjectFormHooks('description');
  const [startDate, handleStartDateOnChange] =
    useProjectFormHooks('start date');
  const [endDate, handleEndDateOnChange] = useProjectFormHooks('end date');
  const [priority, handlePriorityOnChange] = useProjectFormHooks('priority');

  function handleOnSubmit(e) {
    e.preventDefault();

    console.log(name, description, startDate, endDate, priority);

    const projectObj = {
      name,
      description,
      startDate,
      endDate,
      priority,
    };
    console.log(projectObj);
    createProject(projectObj);
  }

  async function createProject(projectObj) {
    try {
      let result = await Axios.post('/api/project/create-project', projectObj);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <form
        onSubmit={handleOnSubmit}
        action=''
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '50%',
        }}
      >
        <h1>Create Project</h1>
        <label name='projectName'>Project Name</label>
        <input type='text' onChange={handleNameOnChange} />
        <label name='description'>Description</label>
        <textarea type='text' onChange={handleDescOnChange} />
        <label name='startDate'>Start Date</label>
        <input type='date' onChange={handleStartDateOnChange} />
        <label name='endDate'>End Date</label>
        <input type='date' onChange={handleEndDateOnChange} />
        <label name='priority'>Priority</label>
        <select name='priority' onChange={handlePriorityOnChange} id='priority'>
          <option value='low'>low</option>
          <option value='medium'>medium</option>
          <option value='high'>high</option>
          <option value='urgent'>urgent</option>
        </select>
        <br />
        <button>submit</button>
      </form>
    </div>
  );
}

export default CreateProject;
