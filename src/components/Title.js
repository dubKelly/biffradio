import React from 'react';
import radium from '../lib/radiumConfig';

const Title = (props) => {
  return <h1 style={[styles, styles[props.menu]]}>biff.</h1>
}

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '64px',
  fontWeight: '700',
  color: 'white',
  transition: 'transform 0.4s ease-in-out',
  true: {
    transform: 'translate(-100%, -150%)'
  }
}

export default radium(Title);
