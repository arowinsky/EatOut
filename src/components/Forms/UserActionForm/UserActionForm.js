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

const UserActionForm = ({ ...props }) => {
  let params = new URLSearchParams(document.location.search.substring(1));
  let mode = params.get("mode");

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
            newPassword: ""
          }}
          onSubmit={newPassword => {
            props.resetPassword(newPassword, oobCode);
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.formItem}>
                <Field
                  name="newPassword"
                  type="text"
                  placeholder="Podaj nowe hasło"
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
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
    verificatedEmail: state.userAction.verificatedEmail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userVerifyEmail: (mode, oobCode) =>
      dispatch(actions.userVerifyEmail(mode, oobCode)),
    resetPassword: (newPassword, oobCode) =>
      dispatch(actions.resetPassword(newPassword, oobCode))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserActionForm);
