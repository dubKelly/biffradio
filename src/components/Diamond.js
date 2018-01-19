import React from 'react';
import radium from '../lib/radiumConfig';
import { _accent } from '../lib/variables';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Diamond = (props) => {
  return <div style={[styles, styles[props.menu]]}></div>;
}

 /////  ///////  //   //  //       ///////   /////
//        //      // //   //       //       //
 ////     //       //     //       /////     ////
    //    //       //     //       //           //
/////     //       //     ///////  ///////  /////

const styles = {
  position: 'absolute',
  height: '200px',
  width: '200px',
  border: `12px solid ${_accent}`,
  top: '0',
  left: '50%',
  transform: 'translate(-50%, -60%) rotate(45deg)',
  transition: 'all 0.4s ease-in-out',
  '@media only screen and (max-height: 400px)': {
    transform: 'translate(-50%, -80%) rotate(45deg)',
  },
  true: {
    transform: 'translate(30%, 20%) rotate(45deg)',
    '@media only screen and (max-height: 400px)': {
      transform: 'translate(0, -30%) rotate(45deg)',
      opacity: '0.3'
    }
  }
}

export default radium(Diamond);
