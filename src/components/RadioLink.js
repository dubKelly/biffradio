import React from 'react';
import radium from '../lib/radiumConfig';
import { _accent } from '../lib/variables';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const RadioLink = () => {
  const radioDomain = 'http://radio.biffscripts.com'

  return (
    <div>
      <span style={styles.underline}></span>
      <a href={radioDomain} style={styles.radio}>Radio</a>
    </div>
  );
}

const styles = {
  radio: {
    position: 'absolute',
    bottom: '110px',
    left: '15px',
    transform: 'rotate(90deg)',
    fontSize: '14px',
    color: _accent,
    textDecoration: 'none',
    letterSpacing: '4px'
  },
  underline: {
    content: '""',
    position: 'absolute',
    bottom: '136px',
    left: '50px',
    height: '1px',
    width: '20px',
    transform: 'rotate(90deg)',
    backgroundColor: 'white',
  }
}

export default radium(RadioLink);
