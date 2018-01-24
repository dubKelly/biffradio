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
  }

  ///////   ///////  ///   //  //////    ///////  ///////
  //    //  //       ////  //  //   //   //       //    //
  ///////   /////    // // //  //    //  /////    ///////
  //  //    //       //  ////  //   //   //       //  //
  //   //   ///////  //   ///  //////    ///////  //   //

  render() {
    return <div
      style={[
        this.state.styles,
        this.state.styles[this.props.menu],
        this.state.styles[this.props.focus]
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
        _focus;

    switch(this.props.section) {
      case 'about_01':
        _height = '55px';
        _top = '50%';
        _border = '6px solid white';
        _transition = 'all 0.6s 0.2s ease-in-out';
        _transform = 'translate(-50%, -50%) rotate(45deg)';
      case 'about_02':
        _height = '144px';
        _top = '50%';
        _border = '1px solid white';
        _transform = 'translate(-50%, -182%) rotate(45deg)';
        _transition = 'all 1s 0.2s ease-out';
        _focus = 'translate(-50%, -102%) rotate(45deg)';
      case 'about_03':
        _height = '233px';
        _top = '50%';
        _border = '6px solid white';
        _transform = 'translate(-50%, 90%) rotate(45deg)';
        _transition = 'all 1s 0.2s ease-out';
        _focus = 'translate(-50%, 10%) rotate(45deg)';
      default:
        _height = '200px';
        _top = '0';
        _border = `12px solid ${_accent}`;
        _transition = 'all 0.4s ease-in-out';
        _transform = 'translate(-50%, -60%) rotate(45deg)';
    }
    // 
    // if (this.props.section === 'home') {
    //   _height = '200px';
    //   _top = '0';
    //   _border = `12px solid ${_accent}`;
    //   _transition = 'all 0.4s ease-in-out';
    //   _transform = 'translate(-50%, -60%) rotate(45deg)';
    // }
    // if (this.props.section === 'about_01') {
    //   _height = '55px';
    //   _top = '50%';
    //   _border = '6px solid white';
    //   _transition = 'all 0.6s 0.2s ease-in-out';
    //   _transform = 'translate(-50%, -50%) rotate(45deg)';
    // }
    // if (this.props.section === 'about_02') {
    //   _height = '144px';
    //   _top = '50%';
    //   _border = '1px solid white';
    //   _transform = 'translate(-50%, -182%) rotate(45deg)';
    //   _transition = 'all 1s 0.2s ease-out';
    //   _focus = 'translate(-50%, -102%) rotate(45deg)';
    // }
    // if (this.props.section === 'about_03') {
    //   _height = '233px';
    //   _top = '50%';
    //   _border = '6px solid white';
    //   _transform = 'translate(-50%, 90%) rotate(45deg)';
    //   _transition = 'all 1s 0.2s ease-out';
    //   _focus = 'translate(-50%, 10%) rotate(45deg)';
    // }

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
      focus: {
        transform: _focus
      }
    }

    this.setState({ styles });
  }
}

export default radium(Diamond);
