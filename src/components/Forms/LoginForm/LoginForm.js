import React from "react";
import styles from "./LoginForm.module.scss";
import { Formik, Field, Form } from "formik";
import Title from "../../Title/Title";
import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import { config } from "../../../configs/firebaseConfig";
import Button from "../../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";
import FoodImgComponent from "../../Footer/FooterImages/FoodImgComponent";
import avocado from "../../../assets/body/avocado.png";
import { Link } from "react-router-dom";
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
    const {
      authError,
      isLoggedIn,
      isLoggedInFb,
      isLoggedInGoogle,
      emailNoVerified,
      validsEmailPassword
    } = this.props;
    if (isLoggedIn || isLoggedInFb || isLoggedInGoogle)
      return <Redirect to="/" />;
    return (
      <div className={styles.wrapper}>
        <Title>Logowanie:</Title>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={values => {
            this.props.onLogIn(values.email, values.password);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.formItem}>
                {validsEmailPassword != null ? (
                  <p className={styles.validsEmailPassword}>
                    Niepoprawny email lub hasło
                  </p>
                ) : null}
                {emailNoVerified ? (
                  <p className={styles.emailNoVerifiedInfo}>
                    To konto nie jest aktywne! Wysłaliśmy email weryfikacyjny na
                    Twoją skrzynkę. Sprawdź czy czasem nie trafił do spamu.
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

              <Link className={styles.forgotPasswordLink} to="/forgot-password">
                Czy zapomniałaś/eś hasła?
              </Link>

              <Button second type="submit">
                Zaloguj
              </Button>
              {this.state.errorLogin}
              {authError ? <p>{authError}</p> : null}
            </Form>
          )}
        </Formik>
        <button onClick={this.props.facebookLogIn}>facebook</button>
        <button onClick={this.props.googleLogIn}>google</button>
        <FoodImgComponent imagePath={avocado} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    isLoggedIn: state.auth.token,
    isLoggedInFb: state.auth.idFb,
    isLoggedInGoogle: state.auth.userGoogleId,
    emailNoVerified: state.auth.emailNoVerified,
    validsEmailPassword: state.auth.validsLogIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogIn: (email, password) => dispatch(actions.logIn(email, password)),
    facebookLogIn: () => dispatch(actions.facebookLogIn()),
    googleLogIn: () => dispatch(actions.googleLogIn())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
