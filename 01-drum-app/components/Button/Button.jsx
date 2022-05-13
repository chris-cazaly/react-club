import React from "react";
import PropTypes from "prop-types";

const Button = (text) => {
  return (
    <>
    {/* <audio id="coin1">
        <source src="./sounds/coin1.mp3" type="audio/mp3"/>
    </audio> */}
    <button>{text}</button>
    </>
  )
}

Button.propTypes = {
  // audioSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Button;