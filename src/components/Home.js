import React from 'react';
import Radium from 'radium';
import office_01_1920 from '../images/office_01_1920.jpeg';

import Title from './Title';

const Home = () => {
  return (
    <section style={styles.home}>
      <div style={styles.cover}></div>
      <Title />
    </section>
  );
}

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
