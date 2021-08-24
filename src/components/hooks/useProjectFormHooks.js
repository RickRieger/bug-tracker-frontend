import { useState } from 'react';

function useProjectFormHooks(inputType) {
  const [value, setValue] = useState('');

  function onChange(e) {
    let value = e.target.value;
    console.log(value);
    setValue(value);
  }

  return [value, onChange];
}

export default useProjectFormHooks;
