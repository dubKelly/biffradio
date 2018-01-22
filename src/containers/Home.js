import React from 'react';
import { connect } from 'react-redux';
import radium from '../lib/radiumConfig';
import office_01_1920 from '../images/office_01_1920.jpeg';
import { _dark } from '../lib/variables';

import { toggleMenu, handleScroll } from '../actions/uiActions';

import Diamond from '../components/Diamond';
import Ex from '../components/Ex';
import Title from '../components/Title';
import Nav from '../components/Nav';
import Burger from '../components/Burger';
import RadioLink from '../components/RadioLink';
import About from '../components/About';
import Work from '../components/Work';
import Team from '../components/Team';
import Contact from '../components/Contact';

@connect((store) => {
  return {
    menu: store.ui.menu
  }
})

class Home extends React.Component {
  toggleMenu() {
    this.props.dispatch(toggleMenu());
  }

  handleScroll(e) {
    this.props.dispatch(handleScroll(e));
  }

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

  render() {
    return (
      <div style={styles.component}>
        <section style={styles.home} onWheel={this.handleScroll.bind(this)}>
          <div style={styles.cover}></div>
          <Diamond menu={this.props.menu} />
          <Ex menu={this.props.menu} />
          <Title menu={this.props.menu} />
          <Nav menu={this.props.menu} />
          <Burger
            menu={this.props.menu}
            toggleMenu={this.toggleMenu.bind(this)}
          />
          <RadioLink />
        </section>
        <div style={styles.subSection}>
          <About />
        </div>
        <div style={styles.subSection}>
          <Work />
        </div>
        <div style={styles.subSection}>
          <Team />
        </div>
        <div style={styles.subSection}>
          <Contact />
        </div>
      </div>
    );
  }
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
  home: {
    backgroundImage: `url(${office_01_1920})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  cover: {
    height: '100%',
    backgroundColor: _dark,
    opacity: '0.8'
  },
  subSection: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: '100%',
  }
}

export default radium(Home);
