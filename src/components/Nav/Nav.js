import { React, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MainRouterContext } from '../../context/context';
import './Nav.css';

function Nav() {
  const { isHomePage, user, handleUserLogout } = useContext(MainRouterContext);
  console.log(isHomePage);
  return (
    <>
      <header>
        <nav>
          {user ? (
            <Link to='/dashboard'>
              <img id='logo' src='mantis-logo.png' alt='logo' />
            </Link>
          ) : (
            <Link to='/'>
              <img id='logo' src='mantis-logo.png' alt='logo' />
            </Link>
          )}
          <ul className='nav-links'>
            <li>
              {user || isHomePage ? (
                ''
              ) : (
                <NavLink
                  to='/sign-up'
                  activeClassName='selected'
                  activeStyle={{ borderBottom: '2px solid black' }}
                >
                  Sign Up
                </NavLink>
              )}
            </li>
            <li>
              {user ? (
                <NavLink
                  activeStyle={{ borderBottom: '2px solid black' }}
                  to='/login'
                  onClick={handleUserLogout}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  activeStyle={{ borderBottom: '2px solid black' }}
                  to='/login'
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
