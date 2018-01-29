import React from 'react';
import radium from '../lib/radiumConfig';
import { _dark } from '../lib/variables';

const About01 = (props) => {
  return (
    <section
      onWheel={props.handleScroll}
      style={[
        styles.subSection,
        styles.subSection[props.ui.subSections.about_sect_01.focus],
        styles.subSection[props.ui.subSections.about_sect_02.focus]
      ]}
    >
      <h2 style={styles.heading}>We<br />Give A<br />Shit.</h2>
      <p style={styles.p_01}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
        aspernatur consequatur voluptate, autem dolores possimus.
      </p>
    </section>
  );
}

 /////  ///////  //   //  //       ///////   /////
//        //      // //   //       //       //
 ////     //       //     //       /////     ////
    //    //       //     //       //           //
/////     //       //     ///////  ///////  /////

const styles = {
  subSection: {
    position: 'absolute',
    // transition: 'all 0.5s 0.2s ease-in-out',
    about_sect_01: {
      transform: 'translateY(-100%)'
    },
    about_sect_02: {
      transform: 'translateY(-200%)'
    }
  },
  heading: {
    position: 'absolute',
    width: '100%',
    top: '15%',
    padding: '0 0 0 10%',
    fontSize: '36px',
    fontWeight: '700',
    letterSpacing: '2px',
    lineHeight: '1.2',
    textAlign: 'left',
    textTransform: 'uppercase',
    color: _dark,
  },
  p_01: {
    position: 'absolute',
    top: '66%',
    padding: '0 10%',
    transform: 'translateY(-50%)',
    fontSize: '16px',
    fontWeight: '600',
    lineHeight: '1.8',
    textAlign: 'center',
    color: _dark
  }
}

export default radium(About01);
