import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../components/Home';

const App = () => {
  return (
    // <Provider store={store}>
      <Router>
        <Route path={'/'} component={Home} />
      </Router>
    // </Provider>
  );
}

export default App;
