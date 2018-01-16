import React from 'react';
import radium from '../lib/radiumConfig';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Burger = (props) => {

  const handleClick = () => {
    props.toggleMenu();
  }

  return (
    <div style={styles.container} onClick={handleClick}>
      <span style={[styles.base, styles.hori, styles.hori[props.menu]]}></span>
      <span style={[styles.base, styles.vert, styles.vert[props.menu]]}></span>
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
    height: '4px',
    width: '20px',
    top: '50%',
    left: '50%',
    backgroundColor: '#33d9cb',
    transition: 'transform 0.4s ease-in-out'
  },
  hori: {
    transform: 'translate(-50%, -50%)',
    true: {
      transform: 'translate(-50%, -50%) rotate(-135deg) scale(1.5, 1)'
    }
  },
  vert: {
    transform: 'translate(-50%, -50%) rotate(90deg)',
    true: {
      transform: 'translate(-50%, -50%) rotate(-45deg) scale(1.5, 1)'
    }
  },
  container: {
    position: 'absolute',
    height: '45px',
    width: '45px',
    bottom: '60px',
    left: '50%',
    transform: 'translateX(-50%)',
    cursor: 'pointer',
  }
}

export default radium(Burger);
