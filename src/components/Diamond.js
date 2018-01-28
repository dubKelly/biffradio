import React from 'react';
import radium from '../lib/radiumConfig';
import { _accent } from '../lib/variables';

class Diamond extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: null
    }
  }

  componentWillMount() {
    this.getStyles();
    console.log(this.props);
  }

  // componentWillReceiveProps() {
  //   this.getStyles();
  //   console.log(this.props);
  // }

  ///////   ///////  ///   //  //////    ///////  ///////
  //    //  //       ////  //  //   //   //       //    //
  ///////   /////    // // //  //    //  /////    ///////
  //  //    //       //  ////  //   //   //       //  //
  //   //   ///////  //   ///  //////    ///////  //   //

  render() {
    return <div
      style={[
        this.state.styles,
        this.state.styles[this.props.ui.menu],
        this.state.styles[this.props.ui.subSections.about_sect_01.focus],
        this.state.styles[this.props.ui.subSections.about_sect_02.focus]
      ]}
    ></div>;
  }

 /////  ///////  //   //  //       ///////   /////
//        //      // //   //       //       //
 ////     //       //     //       /////     ////
    //    //       //     //       //           //
/////     //       //     ///////  ///////  /////

  getStyles() {
    let _height,
        _top,
        _border,
        _transition,
        _transform,
        _focus,
        _focus_02;

    switch(this.props.instance) {
      case 'about_01':
        _height = '55px';
        _top = '50%';
        _border = '6px solid white';
        _transition = 'all 0.6s 0.2s ease-in-out';
        _transform = 'translate(-50%, -50%) rotate(45deg)';
        _focus = 'translate(-50%, -50%) rotate(45deg)';
        _focus_02 = 'translate(-50%, -280%) rotate(45deg)';
        break;
      case 'about_02':
        _height = '144px';
        _top = '50%';
        _border = '1px solid white';
        _transform = 'translate(-50%, -182%) rotate(45deg)';
        _transition = 'all 1s 0.2s ease-out';
        _focus = 'translate(-50%, -102%) rotate(45deg)';
        _focus_02 = 'translate(-50%, -102%) rotate(45deg)';
        break;
      case 'about_03':
        _height = '233px';
        _top = '50%';
        _border = '6px solid white';
        _transform = 'translate(-50%, 90%) rotate(45deg)';
        _transition = 'all 1s 0.2s ease-out';
        _focus = 'translate(-50%, 10%) rotate(45deg)';
        _focus_02 = 'translate(-50%, -173%) rotate(45deg)';
        break;
      default:
        _height = '200px';
        _top = '0';
        _border = `12px solid ${_accent}`;
        _transition = 'all 0.4s ease-in-out';
        _transform = 'translate(-50%, -60%) rotate(45deg)';
    }

    const styles = {
      position: 'absolute',
      height: _height,
      width: _height,
      border: _border,
      top: _top,
      left: '50%',
      transform: _transform,
      transition: _transition,
      '@media only screen and (max-height: 400px)': {
        transform: 'translate(-50%, -80%) rotate(45deg)',
      },
      open: {
        transform: 'translate(30%, 20%) rotate(45deg)',
        '@media only screen and (max-height: 400px)': {
          transform: 'translate(0, -30%) rotate(45deg)',
          opacity: '0.3'
        }
      },
      about_sect_01: {
        transform: _focus
      },
      about_sect_02: {
        transform: _focus_02
      }
    }

    this.setState({ styles });
  }
}

export default radium(Diamond);
