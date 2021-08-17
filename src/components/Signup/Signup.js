import React, { useState, useEffect, useRef, useCallback } from 'react';
import Axios from '../utils/Axios';
import { isAlpha, isEmail, isAlphanumeric, isStrongPassword } from 'validator';
import { toast } from 'react-toastify';
import './Signup.css';
function Signup() {
  const [inputFields, setInputFields] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errorMessages, setErrorMessages] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState({
    isButtonDisabled: true,
  });
  const [inputFieldsOnFocus, setInputFieldsOnFocus] = useState({
    firstNameOnFocus: false,
    lastNameOnFocus: false,
    emailOnFocus: false,
    passwordOnFocus: false,
    confirmPasswordOnFocus: false,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    console.log(e.target.value);
    setInputFields({ ...inputFields, [name]: value });
    if (name === 'firstName' || name === 'lastName') {
      handleFirstNameAndLastNameInput(e);
    }
    if (name === 'password') {
      handlePasswordInput(e);
    }

    if (name === 'email') {
      handleEmailInput(e);
    }
    if (name === 'confirmPassword') {
      if (inputFields.password !== inputFields.confirmPassword) {
        setErrorMessages({
          ...errorMessages,
          confirmPasswordError: 'Passwords do not match',
        });
        setIsButtonDisabled(true);
      } else {
        setErrorMessages({ ...errorMessages, confirmPasswordError: '' });
      }
    }
  };

  const handleFirstNameAndLastNameInput = (e) => {
    const { name, placeholder } = e.target;

    if (inputFields[name].length > 0) {
      if (isAlpha(inputFields[name])) {
        setErrorMessages({
          ...errorMessages,
          [`${e.target.name}Error`]: '',
        });
      } else {
        setErrorMessages({
          ...errorMessages,
          [`${name}Error`]: `${placeholder} can only have alphabet`,
        });
        setIsButtonDisabled(true);
      }
    } else {
      if (e.target.value === '') {
        setErrorMessages({
          ...errorMessages,
          [`${e.target.name}Error`]: `${e.target.placeholder} cannot be empty`,
        });
      }
    }
  };

  const handleEmailInput = (e) => {
    console.log(e);
    if (e.target.value === '') {
      setErrorMessages({
        ...errorMessages,
        emailError: 'Email cannot be empty',
      });
      setIsButtonDisabled(true);
    } else {
      if (isEmail(inputFields.email)) {
        setErrorMessages({ ...errorMessages, emailError: '' });
      } else {
        setErrorMessages({
          ...errorMessages,
          emailError: 'Please enter a valid email',
        });
        setIsButtonDisabled(true);
      }
    }
  };

  const handlePasswordInput = (e) => {
    console.log(e);
    if (inputFields.confirmPasswordOnFocus) {
      if (inputFields.password !== inputFields.confirmPassword) {
        setErrorMessages({
          ...errorMessages,
          confirmPasswordError: 'Password does not match',
        });
        setIsButtonDisabled(true);
      } else {
        setErrorMessages({ ...errorMessages, confirmPasswordError: '' });
      }
    }
    if (e.target.value === '') {
      setErrorMessages({
        ...errorMessages,
        passwordError: 'Password cannot be empty',
      });
      setIsButtonDisabled(true);
    } else {
      if (isStrongPassword(inputFields.password)) {
        setErrorMessages({ ...errorMessages, passwordError: '' });
      } else {
        setErrorMessages({
          ...errorMessages,
          passwordError:
            'Passwords must be at least 8 characters long, and contain at least one uppercase letter, lowercase letter, special character and number.',
        });
        setIsButtonDisabled(true);
      }
    }
  };

  const handleOnBlur = (event) => {
    const { name } = event.target;
    console.log(inputFields[name].length);
    if (inputFields[name].length === 0) {
      setErrorMessages({
        ...errorMessages,
        [`${name}Error`]: `${event.target.placeholder} cannot be empty`,
      });
    }
  };

  const handleInputOnFocus = (event) => {
    const { name } = event.target;
    if (!inputFieldsOnFocus[`${name}OnFocus`]) {
      setInputFieldsOnFocus({
        ...inputFieldsOnFocus,
        [`${name}OnFocus`]: true,
      });
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('hello dog');
  };

  useEffect(() => {
    return () => {
      console.log(inputFields.firstName);
    };
  }, []);

  // const usePrevious = (value) => {
  //   const ref = useRef();
  //   useEffect(() => {
  //     ref.current = value;
  //   });
  //   return ref.current;
  // };

  // const prevButtonState = usePrevious(isButtonDisabled);

  // useEffect(() => {
  //   if (prevButtonState === true) {
  //     if (
  //       inputFieldsOnFocus.firstNameOnFocus &&
  //       inputFieldsOnFocus.lastNameOnFocus &&
  //       inputFieldsOnFocus.emailOnFocus &&
  //       inputFieldsOnFocus.userNameOnFocus &&
  //       inputFieldsOnFocus.passwordOnFocus &&
  //       inputFieldsOnFocus.confirmPasswordOnFocus
  //     ) {
  //       if (
  //         errorMessages.firstNameError.length === 0 &&
  //         errorMessages.lastNameError.length === 0 &&
  //         errorMessages.userNameError.length === 0 &&
  //         errorMessages.emailError.length === 0 &&
  //         errorMessages.passwordError.length === 0 &&
  //         errorMessages.confirmPasswordError.length === 0 &&
  //         errorMessages.password === this.state.confirmPassword
  //       ) {
  //         setIsButtonDisabled(false);
  //       }
  //     }
  //   }
  // }, [inputFields]);

  const {
    firstNameError,
    lastNameError,
    emailError,
    passwordError,
    confirmPasswordError,
  } = errorMessages;

  return (
    <div className='signup__body'>
      <div className='background-image'></div>
      <form className='signup__form' onSubmit={handleOnSubmit}>
        <h1>Create an account</h1>
        <br />

        <br />
        <div className='form-group'>
          <label>Firstname</label>

          <input
            className='form-control'
            type='text'
            name='firstName'
            placeholder='First name'
            id='firstName'
            required
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleInputOnFocus}
            autoFocus
          />
        </div>
        <div className='errorMessage'>{firstNameError && firstNameError}</div>
        <div className='form-group'>
          <label>Lastname</label>
          <input
            className='form-control'
            type='text'
            name='lastName'
            placeholder='Last name'
            id='lastName'
            required
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleInputOnFocus}
          />
        </div>
        <div className='errorMessage'>{lastNameError && lastNameError}</div>
        <div className='form-group'>
          <label>Email</label>
          <input
            className='form-control'
            type='text'
            name='email'
            placeholder='Email'
            id='email'
            required
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleInputOnFocus}
          />
        </div>
        <div className='errorMessage'>{emailError && emailError}</div>
        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-control'
            type='password'
            name='password'
            placeholder='Password'
            id='password'
            required
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleInputOnFocus}
          />
        </div>
        <div className='errorMessage'>{passwordError && passwordError}</div>
        <div className='form-group'>
          <label>ConfirmPassword</label>
          <input
            className='form-control'
            type='password'
            name='confirmPassword'
            placeholder='Confirm password'
            id='confirmPassword'
            required
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            onFocus={handleInputOnFocus}
          />
        </div>
        <div className='errorMessage'>
          {confirmPasswordError && confirmPasswordError}
        </div>
        <div>
          <ul className='list-inline'>
            <li>
              <input
                className='btn btn--form'
                type='submit'
                value='Sign-up'
                disabled={isButtonDisabled}
              />
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Signup;
