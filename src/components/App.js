import React from 'react';
import { Provider } from 'react-redux';
import Radium, { StyleRoot } from 'radium';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '../store';

import Home from '../components/Home';
import About from '../components/About';

const App = () => {
  return (
    <Provider store={store}>
    <StyleRoot style={styles}>
      <Router>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} component={About} />
        </Switch>
      </Router>
    </StyleRoot>
    </Provider>
  );
}

const styles = {
  height: '100%'
}

export default Radium(App);
