import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

export class Nav extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <Link to='/'>
              <img id='logo' src='mantis-logo.png' alt='logo' />
            </Link>
            <ul className='nav-links'>
              <li>
                {this.props.user ? (
                  ''
                ) : (
                  <NavLink
                    to='/sign-up'
                    activeClassName='selected'
                    onClick={this.handleOnClick2}
                    activeStyle={{ borderBottom: '2px solid black' }}
                  >
                    Sign Up
                  </NavLink>
                )}
              </li>
              <li>
                {this.props.user ? (
                  <NavLink
                    activeStyle={{ borderBottom: '2px solid black' }}
                    to='/login'
                    onClick={this.props.handleUserLogout}
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
}
export default Nav;
