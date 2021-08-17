import React, { Component, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import MainRouter from './MainRouter';
import setAxiosAuthToken from './components/utils/setAxiosAuthToken';
import { LoginContext } from './context/context';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
export class App extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    let getJwtToken = window.localStorage.getItem('jwtToken');
    if (getJwtToken) {
      const currentTime = Date.now() / 1000;
      let decodedJWTToken = jwtDecode(getJwtToken);
      if (decodedJWTToken.exp < currentTime) {
        //logout
        this.handleUserLogout();
      } else {
        //login
        this.handleUserLogin(decodedJWTToken);
      }
    }
  }

  handleUserLogin = (user) => {
    this.setState({
      user: {
        email: user.email,
      },
    });
  };

  handleUserLogout = () => {
    window.localStorage.removeItem('jwtToken');
    setAxiosAuthToken(null);
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <div style={{}}>
        <ToastContainer position='top-center' />
        <LoginContext.Provider value={}>
        <MainRouter
          user={this.state.user}
          handleUserLogin={this.handleUserLogin}
          handleUserLogout={this.handleUserLogout}
        />
        </LoginContext.Provider>
 
      </div>
    );
  }
}
export default App;
