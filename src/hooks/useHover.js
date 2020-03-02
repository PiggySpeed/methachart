import {useState} from 'react';

function useHover(isHovered) {
  const [hover, setHover] = useState(isHovered);

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
