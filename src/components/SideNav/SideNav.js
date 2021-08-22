import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MainRouterContext } from '../../context/context';
import './SideNav.css';

function SideNav() {
  const { user } = useContext(MainRouterContext);
  return (
    <>
      {user ? (
        <aside id='dashboard-sidebar-nav'>
          <Link id='aside-logo' to='/dashboard'>
            <img id='logo' src='mantis-logo.png' alt='logo' />
          </Link>
          <div id='aside-link-container'>
            <div>link</div>
            <div>link</div>
            <div>link</div>
            <div>link</div>
            <div>link</div>
          </div>
        </aside>
      ) : (
        ''
      )}
    </>
  );
}

export default SideNav;
