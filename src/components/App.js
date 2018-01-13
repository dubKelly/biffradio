import React from 'react';
import Radium, { StyleRoot } from 'radium';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../components/Home';

const App = () => {
  return (
    <StyleRoot style={styles}>
      <Router>
        <Route path={'/'} component={Home} />
      </Router>
    </StyleRoot>
  );
}

const styles = {
  height: '100%'
}

export default Radium(App);
