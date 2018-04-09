import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDetails } from "../actions";
import Form from "../components/Form";
import Overlay from "../components/Overlay";

class App extends Component {
  handleSubmit = values => {
    const { dispatch, selectedPersonId } = this.props;

    dispatch(fetchDetails(values.personId));
  };

  render() {
    const { isFetching, selectedPersonId } = this.props;
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">Financial Exposure Calculator</h1>
          <Form onSubmit={this.handleSubmit} />
          {!isFetching &&
            Object.keys(selectedPersonId.facilityDetails).length > 0 &&
            Object.keys(selectedPersonId.exposureDetails).length > 0 && (
              <Overlay>
                Your financial exposure is:{" "}
                {selectedPersonId.facilityDetails.val3 *
                  selectedPersonId.exposureDetails.val5}
              </Overlay>
            )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedPersonId } = state;

  const { isFetching } = selectedPersonId || {
    isFetching: true,
    selectedPersonId: {
      facilityDetails: {},
      exposureDetails: {}
    }
  };

  return {
    isFetching,
    selectedPersonId
  };
};

export default connect(mapStateToProps)(App);
