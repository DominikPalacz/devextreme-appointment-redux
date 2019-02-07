import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from './store/Appointments';

import Button from 'devextreme-react/button';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';

import Appointments from './components/Appointments'

class App extends Component {
  render() {
    return (
      <div>
        <Button text='Example Button' onClick={this.props.increment} />
        Appointments
        <Appointments />
      </div>
    );
  }
}

// export default App;
export default connect(
  state => state.appointments,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App);
