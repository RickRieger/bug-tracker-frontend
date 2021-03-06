import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import MainRouter from './MainRouter';
import setAxiosAuthToken from './components/utils/setAxiosAuthToken';
import { MainRouterContext } from './context/context';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState(null);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    let getJwtToken = window.localStorage.getItem('jwtToken');
    if (getJwtToken) {
      const currentTime = Date.now() / 1000;
      let decodedJWTToken = jwtDecode(getJwtToken);
      if (decodedJWTToken.exp < currentTime) {
        //logout
        handleUserLogout();
      } else {
        //login
        handleUserLogin(decodedJWTToken);
      }
    }
  }, []);

  const handleUserLogin = (user) => {
    setUser({
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  };

  const handleUserLogout = () => {
    window.localStorage.removeItem('jwtToken');
    setAxiosAuthToken(null);
    setUser(null);
  };
  const itemsToMainRouterContext = {
    user,
    handleUserLogin,
    handleUserLogout,
    setIsHomePage,
    isHomePage,
  };
  return (
    <>
      <ToastContainer position='top-center' />
      <MainRouterContext.Provider value={itemsToMainRouterContext}>
        <MainRouter />
      </MainRouterContext.Provider>
    </>
  );
}

export default App;
