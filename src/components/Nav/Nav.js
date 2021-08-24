import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MainRouterContext } from '../../context/context';
import './Nav.css';

function Nav() {
  const { isHomePage, user, handleUserLogout } = useContext(MainRouterContext);

  return (
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
      {user ? (
        <form
          id='search-tickets'
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input type='text' placeholder='search tickets' />
          <button>search</button>
        </form>
      ) : (
        ''
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
  );
}

export default Nav;
