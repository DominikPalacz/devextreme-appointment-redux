import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Appointments } from './components/Appointments';

class App extends Component {
  render() {
    return (
      <div>
        App
        <Switch>
          <Route exact path='/' component={Appointments} />
        </Switch>


      </div>
    );
  }
}

export default App;
