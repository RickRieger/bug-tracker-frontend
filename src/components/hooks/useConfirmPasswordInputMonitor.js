import { useState } from 'react';
import { isStrongPassword } from 'validator';

function useConfirmPasswordInputMonitor(inputType) {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [onFocusOccurred, setOnFocusOccurred] = useState(false);
  function onChange(e, passwordToCompare) {
    let value = e.target.value;
    setValue(value);
    checkInput(value);
    comparePasswords(value, passwordToCompare);
    setOnFocusOccurred(true);
  }

  function clearInput() {
    setValue('');
  }

  function checkInput(value) {
    if (value.length === 0) {
      setErrorMessage(`${inputType} is required`);
    } else {
      setErrorMessage(``);
    }
  }
  function handleOnBlur(e) {
    if (value.length === 0) {
      setErrorMessage(`${inputType} is required`);
    }
  }
  function comparePasswords(passwordOne, passwordTwo) {
    if (passwordOne !== passwordTwo) {
      setErrorMessage('passwords do not match');
    }
  }

  return [value, onChange, errorMessage, handleOnBlur, onFocusOccurred];
}

export default useConfirmPasswordInputMonitor;
