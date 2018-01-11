import React from 'react';
import Radium from 'radium';
import office_01_1920 from '../images/office_01_1920.jpeg';
import handleScroll from '../lib/handleScroll';

import Square from './Square';
import Title from './Title';

///////   ///////  ///   //  //////    ///////  ///////
//    //  //       ////  //  //   //   //       //    //
///////   /////    // // //  //    //  /////    ///////
//  //    //       //  ////  //   //   //       //  //
//   //   ///////  //   ///  //////    ///////  //   //

const Home = () => {
  return (
    <section style={styles.home} onWheel={handleScroll}>
      <div style={styles.cover}></div>
      <Square />
      <Title />
    </section>
  );
}

/* ===================================
    STYLES
   =================================== */

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

export default Radium(Home);
