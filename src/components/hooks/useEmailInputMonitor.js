import { useState } from 'react';
import { isEmail } from 'validator';

function useEmailInputMonitor(inputType) {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [responseValue, setResponseValue] = useState(null);
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
      setErrorMessage(`${inputType} is required`);
    } else {
      setErrorMessage(``);
    }

    if (!isEmail(value)) {
      setErrorMessage('Please enter a valid email');
    }
  }
  function handleOnBlur(e) {
    if (value.length === 0) {
      setErrorMessage(`${inputType} is required`);
    }
  }

  return [value, onChange, errorMessage, handleOnBlur, onFocusOccurred];
}

export default useEmailInputMonitor;
