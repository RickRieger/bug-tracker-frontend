import React from 'react';
import './Home.css';
function Home() {
  return (
    <div id='homeContainer'>
      <div id='centerContainer'>
        <img src='mantis-logo.png' id='logo-center-container' alt='' />
        <h1>Mantis Bug Tracker</h1>
        <div>
          <h2>Be more productive</h2>
        </div>
        <div>
          <h3>Manage workforce</h3>
        </div>
        <div>
          <h5>Keep clients happy</h5>
        </div>
        <button className='btn button-center-container'>
          Try it for free!
        </button>
      </div>
    </div>
  );
}

export default Home;
