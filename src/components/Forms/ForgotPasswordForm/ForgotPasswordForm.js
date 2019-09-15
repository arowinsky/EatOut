import React from "react";
import styles from "./ForgotPasswordForm.module.scss";
import { Formik, Field, Form } from "formik";
import Title from "../../Title/Title";
import Button from "../../Button/Button";

class ForgotPasswordForm extends React.Component {
  validateEmail = value => {
    let error;
    if (!value) {
      error = "Podaj adres e-mail";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Adres e-mail jest nieprawidłowy";
    }
    return error;
  };
  render() {
    const { authError } = this.props;
    return (
      <div className={styles.wrapper}>
        <Title>
          Podaj swój adres e-mail na który mamy wysłać Ci link do zresetowania
          Twojego hasła:
        </Title>
        <Formik
          enableReinitialize
          initialValues={{
            email: ""
          }}
          // onSubmit={values => {
          //   this.props.onForgotPassword(values.email);
          // }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.formItem}>
                <Field
                  name="email"
                  type="text"
                  validate={this.validateEmail}
                  placeholder="E-mail"
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>
              <Button second type="submit">
                Wyślij
              </Button>
              {authError ? <p>{authError}</p> : null}
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ForgotPasswordForm;
