import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLength10, number } from "../utils/validation";
import InputField from "./InputField";

const Form = props => {
  const { handleSubmit, pristine, reset, invalid, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="id"
        type="text"
        component={InputField}
        label="PersonId"
        placeholder="Type PersonId here..."
        validate={[required, number, maxLength10]}
      />
      <div>
        <button type="submit" disabled={pristine || invalid || submitting}>
          Submit
        </button>

        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "form"
})(Form);
