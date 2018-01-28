import React from 'react';
// import { connect } from 'react-redux';
import radium from '../lib/radiumConfig';
import { _light, _dark, _accent } from '../lib/variables';

import Diamond from '../components/Diamond';
import About_01 from '../components/About01';

// @connect((store) => {
//   return {
//     subSections: store.ui.subSections
//   }
// })

class About extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     styles: null
  //   }
  // }
  //
  // componentWillMount() {
  //   this.getStyles();
  // }

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

  render() {
    return (
      <div style={styles.component}>
        <div
          style={[
            styles.buffer,
            styles.buffer[this.props.ui.subSections.about_sect_01.focus]
          ]}
        ></div>
        <section
          style={[
            styles.about,
            styles.about[this.props.ui.subSections.about_sect_01.focus]
          ]}
        >
          <Diamond instance="about_01" ui={this.props.ui} />
          <Diamond instance="about_02" ui={this.props.ui} />
          <Diamond instance="about_03" ui={this.props.ui} />
        </section>
        <About_01
          ui={this.props.ui}
          handleScroll={this.props.handleScroll}
        />
      </div>
    );
  }
}
  // <section
  //   style={[
  //     this.state.styles.subSection,
  //     this.state.styles.subSection[this.props.focus]
  //   ]}
  // >
  //   <h2 style={this.state.styles.heading}>We<br />Give A<br />Shit.</h2>
  //   <p style={this.state.styles.p_01}>
  //     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
  //     aspernatur consequatur voluptate, autem dolores possimus.
  //   </p>
  // </section>

 /////  ///////  //   //  //       ///////   /////
//        //      // //   //       //       //
 ////     //       //     //       /////     ////
    //    //       //     //       //           //
/////     //       //     ///////  ///////  /////

  // getStyles() {
    // let _transform;
    // let about_focus;

    // if (this.props.navigation === "pathName") {
    //   _transform = 'translateY(0)';
    // }
    // else {
    //   _transform = 'translateY(-100%)';
    // }

    // switch(this.props.focus) {
    //   case 'about_sect_01':
    //     about_focus = {
    //       transform: 'translateY(-100%)'
    //     }
    //     break;
    //   // case 'about_sect_01':
    //   // case 'about_sect_02':
    //   //   about_focus = {
    //   //     transform: 'translateY(-100%)'
    //   //   }
    //   //   break;
    //   default:
    //     about_focus = {
    //       transform: 'translateY(0)'
    //     }
    // }

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
        about_sect_01: {
          transform: 'translateY(-100%)'
        }
      },
      about: {
        position: 'absolute',
        backgroundColor: _accent,
        transition: 'transform 0.5s 0.2s ease-in-out',
        about_sect_01: {
          transform: 'translateY(-100%)'
        }
      },
      // subSection: {
      //   position: 'absolute',
      //   about_sect_02: {
      //     transform: 'translateY(-100%)'
      //   }
      // },
      // heading: {
      //   position: 'absolute',
      //   width: '100%',
      //   top: '15%',
      //   padding: '0 0 0 10%',
      //   fontSize: '36px',
      //   fontWeight: '700',
      //   letterSpacing: '2px',
      //   lineHeight: '1.2',
      //   textAlign: 'left',
      //   textTransform: 'uppercase',
      //   color: _dark,
      // },
      // p_01: {
      //   position: 'absolute',
      //   top: '66%',
      //   padding: '0 10%',
      //   transform: 'translateY(-50%)',
      //   fontSize: '16px',
      //   fontWeight: '600',
      //   lineHeight: '1.8',
      //   textAlign: 'center',
      //   color: _dark
      // }
    }
  //   console.log(styles);
  //
  //   this.setState({ styles });
  // }
// }

export default radium(About);
