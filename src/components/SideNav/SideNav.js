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
          {user ? (
            <div id='greeting'>
              <h3 style={{ textAlign: 'center' }}>Welcome</h3>
              <h3 style={{ textAlign: 'center' }}>
                {user.firstName} {user.lastName}
              </h3>
            </div>
          ) : (
            ''
          )}
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
