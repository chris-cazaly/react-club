import React from "react";
import PropTypes from "prop-types";

const Button = ({text, audio, keyK}) => {

  window.addEventListener('keydown', (e) => {
    if (keyK == e.code) {
      playSound();
    }
  })
  
  const playSound = () => {
    new Audio(audio).play();
  }


  return (
    <>
      <button onClick={playSound}>{text}</button>
    </>
  )
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
  key: PropTypes.string
}



export default Button;