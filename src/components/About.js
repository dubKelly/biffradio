import React from 'react';
import radium from '../lib/radiumConfig';
import { _light, _dark, _accent } from '../lib/variables';

import Diamond from './Diamond';

class About extends React.Component {
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
    return (
      <div style={this.state.styles.component}>
        <div style={[this.state.styles.buffer, this.state.styles.buffer[this.props.focus]]}></div>
        <section
          onWheel={this.props.handleScroll}
          style={[this.state.styles.about, this.state.styles.about[this.props.focus]]}
        >
          <Diamond section="about_01" />
          <Diamond section="about_02" focus={this.props.focus} />
          <Diamond section="about_03" focus={this.props.focus} />
          <h2 style={this.state.styles.heading}>We<br />Give A<br />Shit.</h2>
        </section>
      </div>
    );
  }

 /////  ///////  //   //  //       ///////   /////
//        //      // //   //       //       //
 ////     //       //     //       /////     ////
    //    //       //     //       //           //
/////     //       //     ///////  ///////  /////

  getStyles() {
    let _transform;

    if (this.props.navigation === "pathName") {
      _transform = 'translateY(0)';
    }
    else {
      _transform = 'translateY(-100%)';
    }

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
          transform: _transform
        }
      },
      about: {
        position: 'absolute',
        backgroundColor: _accent,
        transition: 'transform 0.5s 0.2s ease-in-out',
        focus: {
          transform: _transform
        }
      },
      heading: {
        position: 'absolute',
        width: '100%',
        top: '15%',
        padding: '0 0 0 10%',
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '36px',
        fontWeight: '700',
        letterSpacing: '2px',
        lineHeight: '1.2',
        textAlign: 'left',
        textTransform: 'uppercase',
        color: _dark,
      }
    }

    this.setState({ styles });
  }
}

export default radium(About);
