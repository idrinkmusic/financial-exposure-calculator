import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../components/Form";
import {
  requestPersonDetails,
  fetchPosts,
  calculateExposure
} from "../actions";

class App extends Component {
  handleSubmit = values => {
    const { dispatch, selectedPersonId } = this.props;

    dispatch(calculateExposure(values.personId));
  };

  render() {
    const { selectedPersonId } = this.props;
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">Financial Exposure Calculator</h1>
          <Form onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedPersonId } = state;

  return {
    selectedPersonId
  };
};

export default connect(mapStateToProps)(App);
