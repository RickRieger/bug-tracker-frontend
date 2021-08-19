import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';
import { MainRouterContext } from './context/context';
import { LoginContext } from './context/context';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
function MainRouter() {
  const { user, handleUserLogin, handleUserLogout } =
    useContext(MainRouterContext);

  const ItemsToLoginContext = {
    user,
    handleUserLogin,
    handleUserLogout,
  };
  return (
    <Router>
      <Nav />
      <>
        <Route exact path='/' component={Home} />
        <Route exact path='/sign-up' component={Signup} />
        <LoginContext.Provider value={ItemsToLoginContext}>
          <Route exact path='/login' component={Login} />
        </LoginContext.Provider>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
      </>
    </Router>
  );
}

export default MainRouter;
