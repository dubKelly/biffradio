import React from 'react';
import radium from '../lib/radiumConfig';

const Ex = (props) => {
  return (
    <div>
      <span style={[styles.base, styles.pos, styles.pos[props.menu]]}></span>
      <span style={[styles.base, styles.neg, styles.neg[props.menu]]}></span>
    </div>
  );
}

const styles = {
  base: {
    content: '""',
    position: 'absolute',
    top: '80px',
    left: '50%',
    height: '2px',
    width: '60px',
    backgroundColor: '#33d9cb',
    transition: 'transform 0.4s ease-in-out'
  },
  pos: {
    transform: 'translateX(-50%) rotate(45deg)',
    true: {
      transform: 'translateX(-50%) rotate(45deg) scale(14, 1)'
    }
  },
  neg: {
    transform: 'translateX(-50%) rotate(-45deg)',
    true: {
      transform: 'translateX(-25%) rotate(45deg) scale(3, 1)'
    }
  }
}

export default radium(Ex);
