import React from 'react';
import radium from '../lib/radiumConfig';
import office_01_1920 from '../images/office_01_1920.jpeg';
import handleScroll from '../lib/handleScroll';

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

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: false
    }
  }

  toggleMenu() {
    let menu = !this.state.menu;
    this.setState({ menu });
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
          <Diamond menu={this.state.menu} />
          <Ex menu={this.state.menu} />
          <Title menu={this.state.menu} />
          <Nav menu={this.state.menu} />
          <Burger
            menu={this.state.menu}
            toggleMenu={this.toggleMenu.bind(this)}
          />
          <RadioLink />
        </section>
        <section style={styles.subSection}>
          <About />
        </section>
        <section style={styles.subSection}>
          <Work />
        </section>
        <section style={styles.subSection}>
          <Team />
        </section>
        <section style={styles.subSection}>
          <Contact />
        </section>
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
    backgroundColor: '#262626',
    opacity: '0.8'
  },
  subSection: {
    position: 'absolute',
    height: '100%',
    top: '100%',
  }
}

export default radium(Home);
