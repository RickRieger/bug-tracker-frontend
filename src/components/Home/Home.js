import { React, useEffect, useContext } from 'react';
import { MainRouterContext } from '../../context/context';
import { useHistory } from 'react-router';
import './Home.css';
function Home() {
  const history = useHistory();
  const { setIsHomePage } = useContext(MainRouterContext);
  useEffect(() => {
    setIsHomePage(true);

    return () => {
      setIsHomePage(false);
    };
  }, [setIsHomePage]);
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
        <button
          className='btn button-center-container'
          onClick={() => {
            history.push('/sign-up');
          }}
        >
          Try it for free!
        </button>
      </div>
    </div>
  );
}

export default Home;
