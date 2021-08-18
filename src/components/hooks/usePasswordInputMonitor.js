import { useState } from 'react';
import { isStrongPassword } from 'validator';

function usePasswordInputMonitor(inputType) {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [onFocusOccurred, setOnFocusOccurred] = useState(false);

  function onChange(e) {
    let value = e.target.value;
    setValue(value);
    checkInput(value);
    setOnFocusOccurred(true);
  }

  function checkInput(value) {
    if (value.length === 0) {
      setErrorMessage(`${inputType} is required`);
    } else {
      setErrorMessage(``);
    }
    if (!isStrongPassword(value)) {
      setErrorMessage(
        'Passwords must be at least 8 characters long, and contain at least one uppercase letter, lowercase letter, special character and number.'
      );
    }
  }
  function handleOnBlur(e) {
    if (value.length === 0) {
      setErrorMessage(`${inputType} is required`);
    }
  }

  return [value, onChange, errorMessage, handleOnBlur, onFocusOccurred];
}

export default usePasswordInputMonitor;
