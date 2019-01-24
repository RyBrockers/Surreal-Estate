/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Switch, Route } from 'react-router';

import '../styles/app.css';
import { Switch, Route } from 'react-router';
import Properties from './Properties';
import AddProperty from './AddProperty';
import Navbar from './NavBar';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="nav" />
        <Switch>
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
        </Switch>
      </React.Fragment>

    );
  }
}


export default App;
