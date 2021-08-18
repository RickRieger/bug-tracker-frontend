import { useState } from 'react';

function useConfirmPasswordInputMonitor(inputType) {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  function onChange(e, passwordToCompare) {
    let value = e.target.value;
    setValue(value);
    checkInput(value);
    comparePasswords(value, passwordToCompare);
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
  function comparePasswords(password) {
    if (password.length > 0 && value.length > 0 && password !== value) {
      setErrorMessage('passwords do not match');
    } else {
      setErrorMessage('');
    }
  }

  return [value, onChange, errorMessage, handleOnBlur, comparePasswords];
}

export default useConfirmPasswordInputMonitor;
