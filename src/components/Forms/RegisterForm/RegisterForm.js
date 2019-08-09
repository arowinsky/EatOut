import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import { config } from "../../../config/config";
import styles from "./RegisterForm.module.scss";
import Title from "../../Title/Title";
import Button from "../../Button/Button";

const hasha = require("hasha");

const validateSchema = Yup.object({
  password1: Yup.string()
    .min(3, "Hasło musi mieć minimum 8 zanaków")
    .required("Podaj hasło"),
  password2: Yup.string()
    .required("Powtórz hasło")
    .oneOf([Yup.ref("password1"), null], "Hasła nie są jednakowe")
});

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    if (!firebase.apps.length) {
      app.initializeApp(config);
    }
    this.auth = app.auth();
    this.database = firebase.database();
  }
  addNewUser = values => {
    console.log(values);

    const email = values.email;
    const password = hasha(values.password1, { algorithm: "sha256" });
    const firstname = values.firstname;
    const lastname = values.lastname;
    const username = values.username;

    console.log("weszło do funkcji");
    const verw = this.auth.createUserWithEmailAndPassword(email, password);

    verw
      .then(user => {
        firebase.auth().currentUser.sendEmailVerification();
        let newEmail = email.replace(".", "_");
        this.database.ref("users/" + newEmail).set(
          {
            firstname: firstname,
            lastname: lastname,
            username: username
          },
          error => {
            if (error) {
              console.log(error);
            }
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

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
    } else if (!/^\w+@[a-zA-Z0-9_.-]+?\.[a-zA-Z]{2,3}$/.test(value)) {
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
  render() {
    return (
      <div className={styles.wrapper}>
        <Title>Rejestracja:</Title>
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
          onSubmit={values => {
            console.log("wysłane");
            this.addNewUser(values);
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className={styles.form}>
              <div className={styles.formItem}>
                <Field
                  name="firstname"
                  type="text"
                  validate={this.validateFirstname}
                  placeholder="Podaj Imię"
                  className={styles.input}
                />

                <div className={styles.formItemBar} />
                {errors.firstname && touched.firstname && (
                  <div>{errors.firstname}</div>
                )}
              </div>
              <div className={styles.formItem}>
                <Field
                  name="lastname"
                  type="text"
                  validate={this.validateLastname}
                  placeholder="Podaj Nazwisko"
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {errors.lastname && touched.lastname && (
                  <div>{errors.lastname}</div>
                )}
              </div>
              <div className={styles.formItem}>
                <Field
                  name="email"
                  type="email"
                  validate={this.validateEmail}
                  placeholder="Podaj adres e-mail"
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </div>
              <div className={styles.formItem}>
                <Field
                  name="username"
                  type="text"
                  validate={this.validateUsername}
                  placeholder="Podaj nazwę użytkownika"
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {errors.username && touched.username && (
                  <div>{errors.username}</div>
                )}
              </div>
              <div className={styles.formItem}>
                <Field
                  name="password1"
                  type="password"
                  placeholder="Podaj hasło"
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {errors.password1 && touched.password1 && (
                  <div>{errors.password1}</div>
                )}
              </div>
              <div className={styles.formItem}>
                <Field
                  name="password2"
                  type="password"
                  placeholder="Powtórz hasło"
                  className={styles.input}
                />
                <div className={styles.formItemBar} />
                {errors.password2 && touched.password2 && (
                  <div>{errors.password2}</div>
                )}
              </div>

              <Field
                name="statute"
                type="checkbox"
                validate={this.validateAccept}
                label="Akceptuję regulamin serwisu"
                className={styles.checkbox}
              />
              {errors.statute && touched.statute && <div>{errors.statute}</div>}
              <Button second type="submit">
                Zarejestruj
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default RegisterForm;
