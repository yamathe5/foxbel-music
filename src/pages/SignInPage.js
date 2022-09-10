import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./signin-page.scss";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
});

export default function SignInPage() {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="sign-in-page">
      <h1>Sign in</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          lastname: "",
          genero: "otro",
          phone: "",
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form className="form">
              <label className="form__label"></label>
              Nombre: <Field className="form__field" type="text" name="name" />
              <ErrorMessage
                className="form__error"
                name="name"
                component="div"
              />
              <label className="form__label"></label>
              Apellido:{" "}
              <Field className="form__field" type="text" name="lastname" />
              <ErrorMessage
                className="form__error"
                name="lastname"
                component="div"
              />
              <label className="form__label"></label>
              Celular: <Field className="form__field" type="tel" name="phone" />
              <ErrorMessage
                className="form__error"
                name="phone"
                component="div"
              />
              <label className="form__label"></label>
              Genero:
              <Field className="form__field" as="select" name="genero">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </Field>
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
