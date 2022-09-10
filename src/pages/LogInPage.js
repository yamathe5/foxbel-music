import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import "./log-in-page.scss";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
});

export default function LoginPage() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
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
    </div>
  );
}
