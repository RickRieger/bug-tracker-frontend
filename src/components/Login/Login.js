import React, { useEffect, useContext } from 'react';
// import { isEmpty } from 'validator';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';
import Axios from '../utils/Axios';
import checkIfUserIsAuth from '../utils/checkIsUserIsAuth';
import setAxiosAuthToken from '../utils/setAxiosAuthToken';
import useEmailInputMonitor from '../hooks/useEmailInputMonitor';
import usePasswordInputMonitor from '../hooks/usePasswordInputMonitor';
import './Login.css';
import { LoginContext } from '../../context/context';

function Login() {
  const { handleUserLogin } = useContext(LoginContext);
  const [email, handleEmailOnChange] = useEmailInputMonitor('Email');
  const [password, handlePasswordOnChange] =
    usePasswordInputMonitor('Password');

  useEffect(() => {
    let isAuth = checkIfUserIsAuth();
    if (isAuth) {
      console.log('isAuth and we are good to go. The Jwt token was received!');
    }
  }, []);

  useEffect(() => {
    // if (!isEmpty(email) && !isEmpty(password)) {
    //   setSubmitButtonDisabled(false);
    // } else {
    //   setSubmitButtonDisabled(true);
    // }
  }, [email, password]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      let result = await Axios.post('/api/user/login', {
        email: email,
        password: password,
      });
      let jwtToken = result.data.payload;

      console.log(jwtToken);
      //setting jwt token to out Axios instance
      setAxiosAuthToken(jwtToken);

      let decodedToken = jwtDecode(jwtToken);
      console.log(decodedToken);

      handleUserLogin(decodedToken);
      window.localStorage.setItem('jwtToken', jwtToken);
      toast.success('Login success!');
      // this.props.history.push('/dashboard');
    } catch (e) {
      console.log(e);
      if (e.response.status === 429) {
        toast.error(e.response.data);
      } else {
        toast.error(e.response.data.payload);
      }
    }
  };

  return (
    <div>
      <div className='login_body'>
        <div className='background-image'></div>
        <form className='login__form' onSubmit={handleOnSubmit}>
          <h1>Log in</h1>
          <br />
          <br />
          <br />
          <div className='form-group'>
            <label>Email</label>
            <input
              className='form-control'
              type='email'
              name='email'
              placeholder='email'
              id='email'
              required
              value={email}
              onChange={handlePasswordOnChange}
              autoFocus
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              className='form-control'
              type='password'
              name='password'
              placeholder='Password'
              id='password'
              required
              value={password}
              onChange={handleEmailOnChange}
            />
          </div>
          <div className='m-t-lg'>
            <ul className='list-inline'>
              <li>
                <input
                  className='btn btn--form'
                  type='submit'
                  value='Login'
                  // disabled={submitButtonDisabled}
                />
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
