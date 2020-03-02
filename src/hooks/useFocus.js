import {useState} from 'react';

function useFocus(isFocused) {
  const [focus, setFocus] = useState(isFocused);

  function handleFocus() {
    setFocus(true);
  }

  function handleBlur() {
    setFocus(false);
  }

  return {
    focus,
    handleFocus,
    handleBlur
  }
}

export default useFocus;
