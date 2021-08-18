import { useState } from 'react';
import { isStrongPassword } from 'validator';

function usePasswordInputMonitor(inputType) {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [onFocusOccurred, setOnFocusOccurred] = useState(false);

  function onChange(e) {
    let value = e.target.value;
    setValue(value);
    checkInput(value);
    setOnFocusOccurred(true);
  }

  function clearInput() {
    setValue('');
  }

  function checkInput(value) {
    if (value.length === 0) {
      setIsError(true);
      setErrorMessage(`${inputType} is required`);
      setIsDisabled(true);
    } else {
      setIsError(false);
      setErrorMessage(``);
      setIsDisabled(false);
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

  return [
    value,
    onChange,
    isError,
    errorMessage,
    handleOnBlur,
    onFocusOccurred,
    clearInput,
  ];
}

export default usePasswordInputMonitor;
