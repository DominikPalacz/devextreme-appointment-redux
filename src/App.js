import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from './store/Appointments';

class App extends Component {
  render() {
    return (
      <div>
       App
       <button className="btn btn-primary" onClick={this.props.increment}>Increment</button>
      </div>
    );
  }
}

// export default App;
export default connect(
  state => state.appointments,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(App);
