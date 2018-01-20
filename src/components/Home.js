import React from 'react';
import { connect } from 'react-redux';
import radium from '../lib/radiumConfig';
import office_01_1920 from '../images/office_01_1920.jpeg';
import handleScroll from '../lib/handleScroll';
import { _dark } from '../lib/variables';

import { toggleMenu } from '../actions/menuActions';

import Diamond from './Diamond';
import Ex from './Ex';
import Title from './Title';
import Nav from './Nav';
import Burger from './Burger';
import RadioLink from './RadioLink';
import About from './About';
import Work from './Work';
import Team from './Team';
import Contact from './Contact';

@connect((store) => {
  return {
    menu: store.menu.menu
  }
})

class Home extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     menu: false
  //   }
  // }
  //
  toggleMenu() {
    // let menu = !this.state.menu;
    // this.setState({ menu });
    this.props.dispatch(toggleMenu());
  }

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

  render() {
    return (
      <div style={styles.component}>
        <section style={styles.home} onWheel={handleScroll}>
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
    height: '100%'
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
