import React from "react";
import styles from "./ForgotPasswordForm.module.scss";
import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import { config } from "../../../configs/firebaseConfig";
import { Formik, Field, Form } from "formik";
import Title from "../../Title/Title";
import Button from "../../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

class ForgotPasswordForm extends React.Component {
  constructor() {
    super();
    if (!firebase.apps.length) {
      app.initializeApp(config);
    }
  }
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
    const { invalidEmail, sendedEmail } = this.props;
    return (
      <div className={styles.wrapper}>
        <Title>
          Podaj adres e-mail na który założyłeś/aś to konto, a my wyślemy Ci
          maila z kolejnymi krokami
        </Title>
        <Formik
          initialValues={{
            email: ""
          }}
          onSubmit={values => {
            this.props.onForgotPassword(values.email);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.formItem}>
                {invalidEmail === false ? (
                  <p className={styles.invalidEmail}>
                    Nie istnieje konto z takim emailem. Podaj email na pewno do
                    swojego konta
                  </p>
                ) : null}
                {sendedEmail ? (
                  <p className={styles.invalidEmail}>
                    Wysłaliśmy na twojego e-maila mail z linkiem do formularza,
                    w którym będziesz mógł/ła zresetować swoje hasło.
                  </p>
                ) : null}
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
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    invalidEmail: state.auth.validForgotPassword,
    sendedEmail: state.auth.resetedPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onForgotPassword: email => dispatch(actions.forgotPassword(email))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordForm);
