import React, { Component } from "react";
import FieldLevelValidationForm from "../components/Form";

class App extends Component {
  submit = values => {
    // Do something with the form values
    console.log(values);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="text-center">Calculate Person Financial Exposure</h1>
          <FieldLevelValidationForm onSubmit={this.submit} />
        </div>
      </div>
    );
  }
}

export default App;
