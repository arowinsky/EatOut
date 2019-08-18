import React from "react";
import styles from "./LoginForm.module.scss";
import { Formik, Field, Form } from "formik";
import Title from "../../Title/Title";
import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import { config } from "../../../config/config";
import Button from "../../Button/Button";
import { connect } from "react-redux";
import { logIn } from "../../../store/actions/authActions";
import { Redirect } from "react-router-dom";

const hasha = require("hasha");

class LoginForm extends React.Component {
  constructor() {
    super();
    if (!firebase.apps.length) {
      app.initializeApp(config);
    }
    this.auth = app.auth();
    this.database = firebase.database();
  }

  state = {
    errorLogin: ""
  };
  validateEmail = value => {
    let error;
    if (!value) {
      error = "Podaj adres e-mail";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Adres e-mail jest nieprawidłowy";
    }
    return error;
  };
  validatePassword = value => {
    let error;
    if (!value) {
      error = "Podaj hasło";
    }
    return error;
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className={styles.wrapper}>
        <Title>Logowanie:</Title>

        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={values => {
            this.props.logIn(values);
          }}
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
              <div className={styles.formItem}>
                <Field
                  name="password"
                  type="password"
                  validate={this.validatePassword}
                  placeholder="Hasło"
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {errors.password && touched.password && (
                  <div>{errors.password}</div>
                )}
              </div>
              <Button second type="submit">
                Zaloguj
              </Button>
              {this.state.errorLogin}
              {authError ? <p>{authError}</p> : null}
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: creds => dispatch(logIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
