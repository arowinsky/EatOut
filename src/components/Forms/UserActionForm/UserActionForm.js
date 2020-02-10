import React from "react";
import styles from "./UserActionForm.module.scss";
// import app from "firebase/app";
// import "firebase/auth";
// import firebase from "firebase";
// import { config } from "../../../configs/firebaseConfig";
import { Formik, Field, Form } from "formik";
import Title from "../../Title/Title";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";
import Button from "../../Button/Button";
import * as Yup from "yup";
const validateSchema = Yup.object({
  password1: Yup.string()
    .min(8, "Hasło musi mieć minimum 8 znaków")
    .required("Podaj hasło"),
  password2: Yup.string()
    .required("Powtórz hasło")
    .oneOf([Yup.ref("password1"), null], "Hasła nie są jednakowe")
});
const UserActionForm = ({ ...props }) => {
  let params = new URLSearchParams(document.location.search.substring(1));
  let mode = params.get("mode");
  const { resetedPassword } = props;
  console.log("This is mode", mode);
  const oobCode = params.get("oobCode");
  console.log("This is oobCode", oobCode);

  if (mode === "verifyEmail") {
    props.userVerifyEmail(mode, oobCode);
    let verificatedEmail = props.verificatedEmail;
    if (verificatedEmail === true) {
      return (
        <div className={styles.wrapper}>
          <Title>Twoje konto zostało aktywowane</Title>
          <a href="http://localhost:3000/login">Tutaj możesz się zalogować</a>
        </div>
      );
    } else {
      return (
        <div className={styles.wrapper}>
          <div className={styles.formTitle}>
            Link został już użyty, więc konto już zostało wcześniej aktywowane
          </div>
        </div>
      );
    }
  } else if (mode === "resetPassword") {
    return (
      <div className={styles.wrapper}>
        <div className={styles.formTitle}>
          Podaj jakie chcesz mieć nowe hasło
        </div>
        <Formik
          initialValues={{
            password1: "",
            password2: ""
          }}
          validationSchema={validateSchema}
          onSubmit={passwords => {
            const password1 = passwords.password1;
            props.resetPassword(password1, oobCode);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.formItem}>
                {resetedPassword ? (
                  <p className={styles.validation}>
                    Twoje hasło zostało zmienione
                  </p>
                ) : null}
                <label htmlFor="password1">Podaj nowe hasło</label>
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
                <label htmlFor="password2">Powtórz nowe hasło</label>
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
              <Button second type="submit">
                Wyślij
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    verificatedEmail: state.userAction.verificatedEmail,
    resetedPassword: state.userAction.resetedPassword
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userVerifyEmail: (mode, oobCode) =>
      dispatch(actions.userVerifyEmail(mode, oobCode)),
    resetPassword: (password1, oobCode) =>
      dispatch(actions.resetPassword(password1, oobCode))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserActionForm);
