import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import * as Yup from "yup";
import "./signin-page.scss";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function LoginPage() {
  const { login } = useAuth();
  const handleSubmit = (values, { setSubmitting }) => {
    login(values);
  };

  return (
    <div className="form-page">
      <h1>Log in</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form className="form">
              <label className="form__label"></label>
              Email: <Field className="form__field" type="email" name="email" />
              <ErrorMessage
                className="form__error"
                name="email"
                component="div"
              />
              <label className="form__label"></label>
              Password:
              <Field className="form__field" type="password" name="password" />
              <ErrorMessage
                className="form__error"
                name="password"
                component="div"
              />
              <button
                className="form__button"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
      <Link to="/sign-in">
        <button className="button">Sign in</button>
      </Link>
    </div>
  );
}
