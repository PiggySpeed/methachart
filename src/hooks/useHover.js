import {useState} from 'react';

function useHover() {
  const [hover, setHover] = useState(false);

  function handleMouseEnter() {
    setHover(true);
  }

  function handleMouseLeave() {
    setHover(false);
  }

  return {
    hover,
    handleMouseEnter,
    handleMouseLeave
  }
}

export default useHover;
