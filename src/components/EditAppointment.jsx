import React, { Component } from 'react';

class EditAppointment extends Component {
  render() {
    return (
      <div>
        Edit from for {this.props.match.params.appointmentId}
      </div>
    )
  }
}

export default EditAppointment;
