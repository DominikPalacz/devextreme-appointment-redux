import React, { Component } from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';

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
      <div className='container is-fluid'>
        <div className='notification'>
          Edit from for {this.props.match.params.appointmentId}
          {this.state.fetched
            ? <Formik
              initialValues={{ ...this.state.toEditAppointment }}
              onSubmit={(values) => {
                console.warn('update.(this.appointmentId(), {...values}) // call fake api', values);
                this.props.history.push('/');
              }}
              validate={values => {
                let errors = {};
                if (!values.email) {
                  errors.email = 'Required'
                } else if (values.email.length < 3) {
                  errors.email = 'Min 3 characters'
                }
                return errors;
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
                    <div className='field'>
                      <label className='label'>Email</label>
                      <div className='control'>
                        <input
                          type='text'
                          name='email'
                          onChange={handleChange}
                          value={values.email}
                        />
                      </div>
                      <p className='help is-danger'>{errors.email}</p>
                    </div>
                    <div className='field is-grouped'>
                      <div className='control'>
                        <button type='submit' className='button is-link'>
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                )}
            />
            : <p>Loading...</p>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(EditAppointment);
