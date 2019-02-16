import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from './store/Appointments';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';
import Appointments from './components/Appointments';
import EditAppointment from './components/EditAppointment';


class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <Route exact path='/' component={Appointments} />
          <Route path='/edit_appointment/:appointmentId' component={EditAppointment} />
        </div>
      </Router>
    );
  }
}

// export default App;
export default connect(
  state => state.appointments,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App);
