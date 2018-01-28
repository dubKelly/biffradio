import React from 'react';
import { Provider } from 'react-redux';
import Radium, { StyleRoot } from 'radium';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from '../store';

import Home from '../containers/Home';
import About from '../components/About';

const App = () => {
  return (
    <Provider store={store}>
    <StyleRoot style={styles}>
      <Router>
        <Switch>
          <Route path={'/'} exact component={Home} />
          <Route path={'/about'} render={(props) =>
            <About {...props}
              navigation="pathName"
              subSections="focus"
            />
          }/>
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
