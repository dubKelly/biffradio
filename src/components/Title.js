import React from 'react';
import radium from '../lib/radiumConfig';

const Title = (props) => {
  return (
    <div>
      <h1 style={[styles.title, styles.title[props.menu]]}>biff.</h1>
      <span style={[styles.underline, styles.underline[props.menu]]}></span>
    </div>
  );
}

const styles = {
  title: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '64px',
    fontWeight: '700',
    color: 'white',
    transition: 'transform 0.4s ease-in-out',
    true: {
      transform: 'translate(-100%, -150%)',
      '@media only screen and (max-height: 400px)': {
        transform: 'translate(-150%, -225%)'
      }
    }
  },
  underline: {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-127px, -20px)',
    height: '1px',
    width: '1px',
    backgroundColor: '#33d9cb',
    opacity: '0',
    transition: 'all 0.25s ease-in-out',
    '@media only screen and (max-height: 400px)': {
      transform: 'translate(-189px, -68px)'
    },
    true: {
      transform: 'translate(-101px, -20px) scale(52, 1)',
      opacity: '1',
      transition: 'all 0.3s 0.2s ease-in-out',
      '@media only screen and (max-height: 400px)': {
        transform: 'translate(-165px, -68px) scale(52, 1)'
      }
    }
  }
}

export default radium(Title);
