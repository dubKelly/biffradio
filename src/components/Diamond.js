import React from 'react';
import Radium from 'radium';

const Diamond = (props) => {
  return <div style={[styles, styles[props.menu]]}></div>;
}

const styles = {
  position: 'absolute',
  height: '200px',
  width: '200px',
  border: '12px solid #33d9cb',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -60%) rotate(45deg)',
  transition: 'transform 0.4s ease-in-out',
  true: {
    transform: 'translate(30%, 20%) rotate(45deg)'
  }
}

export default Radium(Diamond);
