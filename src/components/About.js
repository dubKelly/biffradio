import React from 'react';
import radium from '../lib/radiumConfig';
import { _light, _accent } from '../lib/variables';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const About = () => {
  return (
    <div style={styles.component}>
      <div style={styles.buffer}></div>
      <section style={styles.about}>
        About
      </section>
    </div>
  );
}

 /////  ///////  //   //  //       ///////   /////
//        //      // //   //       //       //
 ////     //       //     //       /////     ////
    //    //       //     //       //           //
/////     //       //     ///////  ///////  /////

const styles = {
  component: {
    height: '100%'
  },
  buffer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: _light
  },
  about: {
    position: 'absolute',
    backgroundColor: _accent
  }
}

export default radium(About);
