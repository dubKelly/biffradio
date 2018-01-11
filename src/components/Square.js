import React from 'react';
import Radium from 'radium';

const Square = () => {
  return <div style={styles}></div>;
}

const styles = {
  position: 'absolute',
  height: '200px',
  width: '200px',
  border: '12px solid #33d9cb',
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -60%) rotate(45deg)',
}

export default Radium(Square);
