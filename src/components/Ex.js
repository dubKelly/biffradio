import React from 'react';
import radium from '../lib/radiumConfig';
import { _accent } from '../lib/variables';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Ex = (props) => {
  return (
    <div>
      <span style={[styles.base, styles.pos, styles.pos[props.menu]]}></span>
      <span style={[styles.base, styles.neg, styles.neg[props.menu]]}></span>
    </div>
  );
}

 /////  ///////  //   //  //       ///////   /////
//        //      // //   //       //       //
 ////     //       //     //       /////     ////
    //    //       //     //       //           //
/////     //       //     ///////  ///////  /////

const styles = {
  base: {
    content: '""',
    position: 'absolute',
    top: '80px',
    left: '50%',
    height: '2px',
    width: '60px',
    backgroundColor: _accent,
    transition: 'all 0.4s ease-in-out',
    '@media only screen and (max-height: 400px)': {
      top: '48px',
      width: '40px'
    }
  },
  pos: {
    transform: 'translateX(-50%) rotate(45deg)',
    open: {
      transform: 'translateX(-50%) rotate(45deg) scale(14, 1)',
      '@media only screen and (max-height: 400px)': {
        opacity: '0.3'
      }
    }
  },
  neg: {
    transform: 'translateX(-50%) rotate(-45deg)',
    open: {
      transform: 'translateX(-25%) rotate(45deg) scale(3, 1)',
      '@media only screen and (max-height: 400px)': {
        opacity: '0.3'
      }
    }
  }
}

export default radium(Ex);
