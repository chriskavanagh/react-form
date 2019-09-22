import React from "react";
import ValidateAuth from "../Utilities/ValidateAuth";
import UseFormValidation from "../Utilities/UseFormValidation";

const INITIAL_STATE = {
  email: "",
  password: ""
};

function Register() {
  const {
    isSubmitting,
    handleBlur,
    handleSubmit,
    handleChange,
    values,
    errors
  } = UseFormValidation(INITIAL_STATE, ValidateAuth);

  return (
    <div className="container">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          value={values.email}
          className={errors.email && "error-input"}
          autoComplete="off"
          placeholder="Email Address"
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          name="password"
          type="password"
          value={values.password}
          className={errors.password && "error-input"}
          autoComplete="off"
          placeholder="Password"
        />
        {errors.password && <p className="error-text">{errors.password}</p>}
        <div>
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
