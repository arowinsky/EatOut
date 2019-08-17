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
import { signIn } from "../../../store/actions/authActions";

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
  // validateEmail = value => {
  //   let error;
  //   if (!value) {
  //     error = "Podaj adres e-mail";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
  //     error = "Adres e-mail jest nieprawidłowy";
  //   }
  //   return error;
  // };
  // validatePassword = value => {
  //   let error;
  //   if (!value) {
  //     error = "Podaj hasło";
  //   }
  //   return error;
  // };

  // Login = values => {
  //   const email = values.email;
  //   const password = hasha(values.password, { algorithm: "sha256" });
  //   this.auth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(() => {
  //       this.setState({
  //         errorLogin: ""
  //       });
  //     })
  //     .catch(error => {
  //       let stringData = JSON.stringify(error);
  //       const errorsObj = JSON.parse(stringData);
  //       console.log(errorsObj.code);

  //       if (
  //         errorsObj.code === "auth/wrong-password" ||
  //         errorsObj.code === "auth/user-not-found"
  //       ) {
  //         console.log("Błąd");
  //         this.setState({
  //           errorLogin: "Niepoprawny email/hasło"
  //         });
  //       }
  //     });
  // };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.signIn(this.initialValues);
  // };

  render() {
    const { authError } = this.props;
    return (
      <div className={styles.wrapper}>
        <Title>Logowanie:</Title>

        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={values => {
            this.props.signIn(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.formItem}>
                <Field
                  name="email"
                  type="text"
                  // validate={this.validateEmail}
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
                  // validate={this.validatePassword}
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

const mapStateToProps = values => {
  return {
    authError: values.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
