import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../store/AppointmentsStore';

export class Appointments extends Component {

  render() {
    return (
      <div>
        Appointments
      </div>
    )
  }
}

export default connect(
    state => state.appointments,
    dispatch => bindActionCreators(actionCreators, dispatch)
  )(Appointments);