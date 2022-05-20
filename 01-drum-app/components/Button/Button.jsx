import React from "react";
import PropTypes from "prop-types";
import sound from '../../sounds/chime1.mp3'
// import testOther from "https://static.wikia.nocookie.net/leagueoflegends/images/7/7a/Kennen_Select.ogg/revision/latest?cb=20200711204115"


const Button = ({text}) => {
    const audio = new Audio(sound)
    const start = () => {
      audio.play();
    };
    
  return (
    <>
    <button onClick={start}>{text}</button>
    </>
  )
}

Button.propTypes = {
  // audioSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}



export default Button;