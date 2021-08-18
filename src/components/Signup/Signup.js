import React, { useState, useEffect } from 'react';
import useNameInputMonitor from '../hooks/useNameInputMonitor';
import useEmailInputMonitor from '../hooks/useEmailInputMonitor';
import usePasswordInputMonitor from '../hooks/usePasswordInputMonitor';
import useConfirmPasswordInputMonitor from '../hooks/useConfirmPasswordInputMonitor';
// import Axios from '../utils/Axios';
// import { toast } from 'react-toastify';
import './Signup.css';

function Signup() {
  const [
    firstName,
    handleFirstNameOnChange,
    firstNameErrorMessage,
    handleFirstNameOnBlur,
  ] = useNameInputMonitor('First name');
  const [
    lastName,
    handleLastNameOnChange,
    lastNameErrorMessage,
    handleLastNameOnBlur,
  ] = useNameInputMonitor('Last name');
  const [email, handleEmailOnChange, emailErrorMessage, handleEmailOnBlur] =
    useEmailInputMonitor('Email');
  const [
    password,
    handlePasswordOnChange,
    passwordErrorMessage,
    handlePasswordOnBlur,
  ] = usePasswordInputMonitor('Password');
  const [
    confirmPassword,
    handleConfirmPasswordOnChange,
    confirmPasswordErrorMessage,
    handleConfirmPasswordOnBlur,
    comparePasswords,
  ] = useConfirmPasswordInputMonitor('Confirm password');

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

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

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('hello dog');
  };

  return (
    <div className='signup__body'>
      <div className='background-image'></div>
      <form className='signup__form' onSubmit={handleOnSubmit}>
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
