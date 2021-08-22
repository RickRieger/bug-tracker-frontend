import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import checkIfUserIsAuth from '../utils/checkIsUserIsAuth';

// Higher Order Component
const PublicRoute = ({ component: Component }) => {
  return (
    <Route
      render={() =>
        checkIfUserIsAuth() ? <Redirect to='/dashboard' /> : <Component />
      }
    />
  );
};
export default PublicRoute;
