import { useState } from 'react';
import { isAlpha } from 'validator';

function useNameHooks(inputType) {
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

    if (value.length > 0 && !isAlpha(value)) {
      setErrorMessage(
        `${inputType} may not contain numbers or special characters`
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

export default useNameHooks;
