import React, { useState, useEffect, useContext } from 'react';
import { MainRouterContext } from '../../context/context';
import useNameHooks from '../hooks/useNameHooks';
import useEmailHooks from '../hooks/useEmailHooks';
import usePasswordHooks from '../hooks/usePasswordHooks';
import useConfirmPasswordHooks from '../hooks/useConfirmPasswordHooks';
import Axios from '../utils/Axios';
import jwtDecode from 'jwt-decode';
import setAxiosAuthToken from '../utils/setAxiosAuthToken';
import { toast } from 'react-toastify';
import './Signup.css';
import { useHistory } from 'react-router-dom';

function Signup() {
  const { setUser, handleUserLogin, handleUserLogout } =
    useContext(MainRouterContext);
  const [
    firstName,
    handleFirstNameOnChange,
    firstNameErrorMessage,
    handleFirstNameOnBlur,
  ] = useNameHooks('First name');
  const [
    lastName,
    handleLastNameOnChange,
    lastNameErrorMessage,
    handleLastNameOnBlur,
  ] = useNameHooks('Last name');
  const [email, handleEmailOnChange, emailErrorMessage, handleEmailOnBlur] =
    useEmailHooks('Email');
  const [
    password,
    handlePasswordOnChange,
    passwordErrorMessage,
    handlePasswordOnBlur,
  ] = usePasswordHooks('Password');
  const [
    confirmPassword,
    handleConfirmPasswordOnChange,
    confirmPasswordErrorMessage,
    handleConfirmPasswordOnBlur,
    comparePasswords,
  ] = useConfirmPasswordHooks('Confirm password');

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  const history = useHistory();

  useEffect(() => {
    comparePasswords(password);
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (
        !firstNameErrorMessage &&
        !lastNameErrorMessage &&
        !emailErrorMessage &&
        !passwordErrorMessage &&
        !confirmPasswordErrorMessage &&
        password === confirmPassword
      ) {
        setIsSubmitButtonDisabled(false);
      } else {
        setIsSubmitButtonDisabled(true);
      }
    }
  }, [
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    firstNameErrorMessage,
    lastNameErrorMessage,
    emailErrorMessage,
    passwordErrorMessage,
    confirmPasswordErrorMessage,
    comparePasswords,
  ]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      let userInputObj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      let result = await Axios.post('/api/user/sign-up', userInputObj);
      let jwtToken = result.data.payload;

      console.log(jwtToken);
      //setting jwt token to out Axios instance
      setAxiosAuthToken(jwtToken);

      let decodedToken = jwtDecode(jwtToken);
      // console.log(decodedToken);

      handleUserLogin(decodedToken);

      window.localStorage.setItem('jwtToken', jwtToken);
      // console.log(result);
      toast.success('Login success!');
      history.push('/dashboard');
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

      history.push('/dashboard');
    } catch (e) {
      console.log(e);
      toast.error(`${e.response.data.message}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='signup__body'>
      <div className='background-image'></div>
      <form
        className='signup__form'
        onSubmit={handleOnSubmit}
        autoComplete='on'
      >
        <h1>Create an account</h1>
        <br />
        <br />
        <div className='form-group'>
          <label>FirstName</label>

          <input
            className='form-control'
            type='text'
            name='firstName'
            placeholder='First name'
            id='firstName'
            required
            onChange={handleFirstNameOnChange}
            onBlur={handleFirstNameOnBlur}
            autoComplete='given-name'
            autoFocus
          />
        </div>
        <div className='errorMessage'>
          {firstNameErrorMessage && firstNameErrorMessage}
        </div>
        <div className='form-group'>
          <label>Lastname</label>
          <input
            className='form-control'
            type='text'
            name='lastName'
            placeholder='Last name'
            id='lastName'
            required
            onChange={handleLastNameOnChange}
            onBlur={handleLastNameOnBlur}
            autoComplete='family-name'
          />
        </div>
        <div className='errorMessage'>
          {lastNameErrorMessage && lastNameErrorMessage}
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input
            className='form-control'
            type='text'
            name='email'
            placeholder='Email'
            id='email'
            required
            onChange={handleEmailOnChange}
            onBlur={handleEmailOnBlur}
            autoComplete='email'
          />
        </div>
        <div className='errorMessage'>
          {emailErrorMessage && emailErrorMessage}
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
            onChange={handlePasswordOnChange}
            onBlur={handlePasswordOnBlur}
            autoComplete='new-password'
          />
        </div>
        <div className='errorMessage'>
          {passwordErrorMessage && passwordErrorMessage}
        </div>
        <div className='form-group'>
          <label>ConfirmPassword</label>
          <input
            className='form-control'
            type='password'
            name='confirmPassword'
            placeholder='Confirm password'
            id='confirmPassword'
            required
            onChange={(e) => handleConfirmPasswordOnChange(e)}
            onBlur={handleConfirmPasswordOnBlur}
            autoComplete='new-password'
          />
        </div>
        <div className='errorMessage'>
          {confirmPasswordErrorMessage && confirmPasswordErrorMessage}
        </div>
        <div>
          <ul className='list-inline'>
            <li>
              <input
                className='btn btn--form'
                type='submit'
                value='Sign-up'
                disabled={isSubmitButtonDisabled}
              />
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Signup;
