import React from 'react';
import radium from '../lib/radiumConfig';
import { _light, _accent } from '../lib/variables';

import Diamond from './Diamond';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const About = (props) => {
  return (
    <div style={styles.component}>
      <div style={[styles.buffer, styles.buffer[props.focus]]}></div>
      <section
        onWheel={props.handleScroll}
        style={[styles.about, styles.about[props.focus]]}
      >
        <Diamond section="about_01" />
        <Diamond section="about_02" focus={props.focus} />
        <Diamond section="about_03" focus={props.focus} />
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
    height: '100%',
  },
  buffer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: _light,
    transition: 'transform 0.4s 0.1s ease-in-out',
    focus: {
      transform: 'translateY(-100%)'
    }
  },
  about: {
    position: 'absolute',
    backgroundColor: _accent,
    transition: 'transform 0.5s 0.2s ease-in-out',
    focus: {
      transform: 'translateY(-100%)'
    }
  }
}

export default radium(About);
