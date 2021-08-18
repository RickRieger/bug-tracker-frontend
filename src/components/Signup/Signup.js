import React, { useState, useEffect, useRef, useCallback } from 'react';
import useFormValueMonitor from '../hooks/useNameInputMonitor';
import useEmailInputMonitor from '../hooks/useEmailInputMonitor';
import usePasswordInputMonitor from '../hooks/usePasswordInputMonitor';
import useConfirmPasswordInputMonitor from '../hooks/useConfirmPasswordInputMonitor';
import Axios from '../utils/Axios';
import { toast } from 'react-toastify';
import './Signup.css';

function Signup() {
  const [
    firstName,
    handleFirstNameOnChange,
    firstNameErrorMessage,
    handleFirstNameOnBlur,
    handleFirstNameOnFocus,
  ] = useFormValueMonitor('First name');
  const [
    lastName,
    handleLastNameOnChange,
    lastNameErrorMessage,
    handleLastNameOnBlur,
    handleLastNameOnFocus,
  ] = useFormValueMonitor('Last name');
  const [
    email,
    handleEmailOnChange,
    emailErrorMessage,
    handleEmailOnBlur,
    handleEmailOnFocus,
  ] = useEmailInputMonitor('Email');
  const [
    password,
    handlePasswordOnChange,
    isPasswordError,
    passwordErrorMessage,
    handlePasswordOnBlur,
    handlePasswordOnFocus,
  ] = usePasswordInputMonitor('Password');
  const [
    confirmPassword,
    handleConfirmPasswordOnChange,
    confirmPasswordErrorMessage,
    handleConfirmPasswordOnBlur,
    handleConfirmPasswordOnFocus,
  ] = useConfirmPasswordInputMonitor('Confirm password');

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

  useEffect(() => {
    if (firstName && lastName && email && password && confirmPassword) {
      if (
        !firstNameErrorMessage &&
        !lastNameErrorMessage &&
        !emailErrorMessage &&
        !passwordErrorMessage &&
        !confirmPasswordErrorMessage &&
        password === confirmPassword
      ) {
        setIsSubmitButtonDisabled(false);
      }
    }
  }, [
    useFormValueMonitor,
    useFormValueMonitor,
    useEmailInputMonitor,
    usePasswordInputMonitor,
    useConfirmPasswordInputMonitor,
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
            // onFocus={handleInputOnFocus}
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
            // onFocus={handleInputOnFocus}
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
            // onFocus={handleInputOnFocus}
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
            // onFocus={handleInputOnFocus}
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
            onChange={(e) => handleConfirmPasswordOnChange(e, password)}
            onBlur={handleConfirmPasswordOnBlur}
            // onFocus={handleInputOnFocus}
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
