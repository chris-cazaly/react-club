import React from "react";
import PropTypes from "prop-types";

const Button = ({text, audio}) => {
  
  const playSound = () => {
    new Audio(audio).play();
  }

  console.log(typeof(audio))
    
  return (
    <>
      <button onClick={playSound}>{text}</button>
    </>
  )
}

Button.propTypes = {
  // audioSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}



export default Button;