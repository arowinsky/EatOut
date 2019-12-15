import React from "react";
import styles from "./LoginForm.module.scss";
import { Formik, Field, Form } from "formik";
import Button from "../../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";
import FoodImgComponent from "../../Footer/FooterImages/FoodImgComponent";
import avocado from "../../../assets/body/avocado.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebookF } from "@fortawesome/free-brands-svg-icons";
class LoginForm extends React.Component {
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
      validsEmailPassword,
      z,
      tooManyAttemptsLogInTryLater
    } = this.props;
    if (isLoggedIn || isLoggedInFb || isLoggedInGoogle || z)
      return <Redirect to="/" />;
    return (
      <div className={styles.wrapper}>
        <div className={styles.formTitle}>Logowanie:</div>
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
                  <p className={styles.validation}>
                    Niepoprawny email lub hasło
                  </p>
                ) : null}
                {tooManyAttemptsLogInTryLater ? (
                  <p className={styles.validation}>
                    Zbyt wiele prób logowania. Spróbuj ponownie później.
                  </p>
                ) : null}
                {emailNoVerified ? (
                  <p className={styles.validation}>
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
                Czy zapomniałaś/eś hasło?
              </Link>

              <Button second type="submit">
                Zaloguj
              </Button>
              {this.state.errorLogin}
              {authError ? <p>{authError}</p> : null}
            </Form>
          )}
        </Formik>
        <div className={styles.socialInfo}>Zaloguj się za pomocą: </div>
        <div className={styles.socialIcons}>
          <FontAwesomeIcon
            icon={faFacebookF}
            onClick={this.props.facebookLogIn}
            className={styles.facebookIcon}
          />
          <FontAwesomeIcon
            icon={faGoogle}
            onClick={this.props.googleLogIn}
            className={styles.googleIcon}
          />
        </div>
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
    validsEmailPassword: state.auth.validsLogIn,
    z: state.auth.z,
    tooManyAttemptsLogInTryLater: state.auth.tooManyAttemptsLogInTryLater
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogIn: (email, password) => dispatch(actions.logIn(email, password))
    // facebookLogIn: () => dispatch(actions.facebookLogIn()),
    // googleLogIn: () => dispatch(actions.googleLogIn())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
