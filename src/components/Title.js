import React from 'react';
import Radium from 'radium';

const Title = () => {
  return <h1 style={styles}>biff.</h1>
}

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '64px',
  fontWeight: '700',
  color: 'white',
}

export default Radium(Title);
