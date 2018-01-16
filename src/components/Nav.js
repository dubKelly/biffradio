import React from 'react';
import shortid from 'shortid';
import radium from '../lib/radiumConfig';

/*** modify loop for additional keys ***/
let keys = [];

for (var i = 0; i < 4; i++) {
  keys.push(shortid.generate());
}

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Nav = (props) => {
  return (
    <div style={styles.navMenu}>
      <ul>
        <li style={[styles.li, styles.li[props.menu], styles.nthChild_1[props.menu]]}>
          <span key={keys[0]} style={[styles.span, styles.span[props.menu]]}>About Us</span>
        </li>
        <li style={[styles.li, styles.li[props.menu], styles.nthChild_2[props.menu]]}>
          <span key={keys[1]} style={[styles.span, styles.span[props.menu]]}>Our Work</span>
        </li>
        <li style={[styles.li, styles.li[props.menu], styles.nthChild_3[props.menu]]}>
          <span key={keys[2]} style={[styles.span, styles.span[props.menu]]}>Meet the Team</span>
        </li>
        <li style={[styles.li, styles.li[props.menu], styles.nthChild_4[props.menu]]}>
          <span key={keys[3]} style={[styles.span, styles.span[props.menu]]}>Contact Us</span>
        </li>
      </ul>
    </div>
  );
}

 /////  ///////  //   //  //       ///////   /////
//        //      // //   //       //       //
 ////     //       //     //       /////     ////
    //    //       //     //       //           //
/////     //       //     ///////  ///////  /////

const styles = {
  navMenu: {
    position: 'absolute',
    top: '66%',
  	width: '100%',
  	transform: 'translateY(-50%)',
  	fontSize: '14px',
  	fontWeight: '200',
  	textTransform: 'uppercase',
  	textAlign: 'right',
  	lineHeight: '2',
  	letterSpacing: '4px',
  	transition: 'all 0.4s 0.2s ease-in-out',
  },
  li: {
    opacity: '0',
    transition: 'all 0.3 ease-in-out',
    true: {
      opacity: '1'
    }
  },
  nthChild_1: {
    true: {
      transform: 'translateX(-57px)',
      transition: 'all 0.3s 0.1s ease-in-out'
    }
  },
  nthChild_2: {
    true: {
      transform: 'translateX(-57px)',
      transition: 'all 0.3s 0.2s ease-in-out'
    }
  },
  nthChild_3: {
    true: {
      transform: 'translateX(-57px)',
      transition: 'all 0.3s 0.3s ease-in-out'
    }
  },
  nthChild_4: {
    true: {
      transform: 'translateX(-57px)',
      transition: 'all 0.3s 0.4s ease-in-out'
    }
  },
  span: {
    color: 'white',
    transition: 'all 0.2s ease-in-out',
    ':hover': {
      color: '#33d9cb'
    },
    true: {
      cursor: 'pointer',
    }
  }
}

export default radium(Nav);
