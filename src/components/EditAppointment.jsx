import React, { Component } from 'react';
import { Formik } from "formik";

class EditAppointment extends Component {
  state = {
    toEditAppointment: null,
    fetched: false,
  }

  appointmentId = () => this.props.match.params.appointmentId;

  componentDidMount = () => {
    // componentDidMount = async () => {
    // const toEditAppointment = await get(this.appointmentId()); // call fake api
    const toEditAppointment = {
      email: 'palacz.dominik@gmail.com',
      tel: '0617828556',
      id: this.appointmentId(),
    }
    this.setState({ toEditAppointment, fetched: true, });
    console.log('TCL: EditAppointment -> //componentDidMount -> toEditAppointment', this.state);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        Edit from for {this.props.match.params.appointmentId}
        {this.state.fetched
          ? <Formik
            initialValues={{ ...this.state.toEditAppointment }}
            onSubmit={(values) => {
              console.warn('update.(this.appointmentId(), {...values}) // call fake api', values);
            }}
            render={({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting
            }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type='text'
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                  />
                  <button type='submit'>Update</button>
                </form>
              )}
          />
          : <p>Loading...</p>
        }
      </div>
    )
  }
}

export default EditAppointment;
