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
    );
  }
}

 /////  ///////  //   //  //       ///////   /////
//        //      // //   //       //       //
 ////     //       //     //       /////     ////
    //    //       //     //       //           //
/////     //       //     ///////  ///////  /////

const styles = {
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
  }
}

export default radium(Home);
