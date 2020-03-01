import {useState} from 'react';

function useFocus(isHovered) {
  const [focus, setFocus] = useState(isHovered);

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
