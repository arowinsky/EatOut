import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./RegisterForm.module.scss";
import Title from "../../Title/Title";
import Button from "../../Button/Button";
import { connect } from "react-redux";
import FoodImgComponent from "../../Footer/FooterImages/FoodImgComponent";
import dumplings from "../../../assets/body/dumplings.png";
import { signUp } from "../../../store/actions/authActions";
import ReCAPTCHA from "react-google-recaptcha";
import { Redirect } from "react-router-dom";

const validateSchema = Yup.object({
  firstname: Yup.string().min(3, "Imię musi mieć minimum 3 znaki"),
  lastname: Yup.string().min(3, "Nazwisko musi mieć minimum 3 znaki"),
  username: Yup.string().min(5, "Nazwa uytkownika musi mieć minimum 5 znaków"),
  password1: Yup.string()
    .min(3, "Hasło musi mieć minimum 8 zanaków")
    .required("Podaj hasło"),
  password2: Yup.string()
    .required("Powtórz hasło")
    .oneOf([Yup.ref("password1"), null], "Hasła nie są jednakowe")
});

class RegisterForm extends React.Component {
  state = {
    errorEmail: "",
    singupCorrect: "",
    usernameError: ""
  };
  result = null;

  validateFirstname = value => {
    let error;
    if (!value) {
      error = "Uzupełnij imię";
    } else if (!/[A-Za-z]/.test(value)) {
      error = "Nieprawidłowe imię";
    }
    return error;
  };
  validateLastname = value => {
    let error;
    if (!value) {
      error = "Podaj Nazwisko";
    } else if (!/[A-Za-z]/.test(value)) {
      error = "Nieprawidłowe nazwisko";
    }
    return error;
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

  validateUsername = value => {
    let error;
    if (!value) {
      error = "Podaj nazwę użytkownika";
    } else if (!/[A-Za-z0-9_.-]/.test(value)) {
      error = "Nieprawidłowa nazwa użytkownika";
    }
    return error;
  };

  validateAccept = checed => {
    let error;
    if (!checed) {
      error = "Zaakceptuj regulamin";
    }
    return error;
  };

  onChange = value => {
    this.result = value;
  };
  render() {
    const {
      isRegistered,
      validationEmailSignUp,
      validationUsername,
      isLoggedIn,
      isLoggedInFb,
      isLoggedInGoogle
    } = this.props;
    if (isRegistered) {
      return <Redirect to="/register-success" />;
    } else if (isLoggedIn || isLoggedInFb || isLoggedInGoogle)
      return <Redirect to="/" />;

    return (
      <div className={styles.wrapper}>
        <div className={styles.formTitle}>Rejestracja:</div>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            username: "",
            password1: "",
            password2: "",
            statute: false
          }}
          validationSchema={validateSchema}
          onSubmit={newUser => {
            // if (this.result != null) {
            this.props.signUp(
              newUser.email,
              newUser.password1,
              newUser.firstname,
              newUser.lastname,
              newUser.username
            );
            // }
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className={styles.form}>
              <div className={styles.formItem}>
                <label htmlFor="firstname">Imię</label>
                <Field
                  name="firstname"
                  type="text"
                  validate={this.validateFirstname}
                  className={styles.input}
                />

                <div className={styles.formItemBar} />
                {errors.firstname && touched.firstname && (
                  <div>{errors.firstname}</div>
                )}
              </div>
              <div className={styles.formItem}>
                <label htmlFor="lastname">Nazwisko</label>
                <Field
                  name="lastname"
                  type="text"
                  validate={this.validateLastname}
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {errors.lastname && touched.lastname && (
                  <div className={styles.validateText}>{errors.lastname}</div>
                )}
              </div>
              <div className={styles.formItem}>
                <label htmlFor="username">Nazwa użytkownika</label>
                <Field
                  name="username"
                  type="text"
                  validate={this.validateUsername}
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {this.state.usernameError}
                {errors.username && touched.username && (
                  <div>{errors.username}</div>
                )}
                {validationUsername
                  ? "Ta nazwa użytkownika jest już zajęta"
                  : null}
              </div>
              <div className={styles.formItem}>
                <label htmlFor="email">Adres email</label>
                <Field
                  name="email"
                  type="email"
                  validate={this.validateEmail}
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {this.state.errorEmail}
                {errors.email && touched.email && <div>{errors.email}</div>}
                {validationEmailSignUp ? "Ten email jest już zajęty" : null}
              </div>
              <div className={styles.formItem}>
                <label htmlFor="password1">Hasło</label>
                <Field
                  name="password1"
                  type="password"
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {errors.password1 && touched.password1 && (
                  <div>{errors.password1}</div>
                )}
              </div>
              <div className={styles.formItem}>
                <label htmlFor="password2">Powtórz hasło</label>
                <Field
                  name="password2"
                  type="password"
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {errors.password2 && touched.password2 && (
                  <div>{errors.password2}</div>
                )}
              </div>
              <label htmlFor="statute">
                Akceptuję warunki korzystania z serwisu
              </label>
              <Field
                name="statute"
                type="checkbox"
                validate={this.validateAccept}
                className={styles.checkbox}
              />
              {errors.statute && touched.statute && <div>{errors.statute}</div>}
              <br />
              {/* <ReCAPTCHA
                sitekey="6Ldf8rgUAAAAAPwhZUzx8p5aKLX-wG9UZ-XzP_1n"
                onChange={this.onChange}
              /> */}
              <Button second type="submit">
                Zarejestruj
              </Button>
            </Form>
          )}
        </Formik>

        <FoodImgComponent imagePath={dumplings} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.auth.error,
    isRegistered: state.auth.userId,
    validationEmailSignUp: state.auth.validEmailSignUp,
    validationUsername: state.auth.validUsername,
    isLoggedIn: state.auth.token,
    isLoggedInFb: state.auth.idFb,
    isLoggedInGoogle: state.auth.userGoogleId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: (email, password1, firstname, lastname, username) =>
      dispatch(signUp(email, password1, firstname, lastname, username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
