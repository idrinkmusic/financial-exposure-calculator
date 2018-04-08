import React from "react";
import { Field, reduxForm } from "redux-form";
import { required, maxLength, maxLength10, number } from "../utils/validation";

const renderField = ({
  input,
  label,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, invalid, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="id"
        type="text"
        component={renderField}
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
  form: "fieldLevelValidation" // a unique identifier for this form
})(FieldLevelValidationForm);
