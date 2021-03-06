import React from "react";
import styles from "./AccountSettings.module.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Formik, Form, Field } from "formik";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";
const validateSchema = Yup.object({
  password1: Yup.string()
    .min(8, "Hasło musi mieć minimum 8 znaków")
    .required("Podaj hasło"),
  password2: Yup.string()
    .required("Powtórz hasło")
    .oneOf([Yup.ref("password1"), null], "Hasła nie są jednakowe")
});
class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendedRequest: null,
      userWantEditData: null,
      userWantEditPassword: null,
      maybeWillBecomeOwner: null
    };
  }
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
      error = "Uzupełnij nazwisko";
    } else if (!/[A-Za-z]/.test(value)) {
      error = "Nieprawidłowe nazwisko";
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
  validateEmail = value => {
    let error;
    if (!value) {
      error = "Podaj adres e-mail";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Adres e-mail jest nieprawidłowy";
    }
    return error;
  };
  editUserData = () => {
    this.setState(() => ({ userWantEditData: true }));
  };
  editUserPassword = () => {
    this.setState(() => ({ userWantEditPassword: true }));
  };
  deleteAccount = () => {
    let z = localStorage.getItem("z");
    if (this.props.userRule === "owner") {
      this.props.deleteOwnerAccount(z);
    } else if (this.props.userRule === "client") {
      this.props.deleteClientAccount(z);
    }
  };
  userWantsToBecomeOwner = () => {
    this.setState(() => ({ maybeWillBecomeOwner: true }));
  };

  scratchAdvance = () => {
    this.setState(() => ({ maybeWillBecomeOwner: false }));
  };

  render() {
    const {
      sendedRequest,
      userWantEditData,
      userWantEditPassword,
      maybeWillBecomeOwner
    } = this.state;
    const {
      accountData,
      editUserData,
      editedBasicUserData,
      editUserEmail,
      editedUserEmail,
      editUserPassword,
      editedUserPassword,
      ownerAccountDeleted,
      clientAccountDeleted,
      logOut,
      userGoogleId,
      userFbId,
      provider
    } = this.props;
    console.log("TCL: AccountSettings -> render -> userGoogleId", userGoogleId);
    console.log("TCL: AccountSettings -> render -> userFbId", userFbId);
    let lastName;
    let firstName;
    let username;
    let email;
    let z = localStorage.getItem("z");
    if (sendedRequest === null) {
      this.props.getUserData(z);
      this.setState({ sendedRequest: true });
    }
    if (editedBasicUserData && editedUserEmail) {
      firstName = editedBasicUserData.firstName;
      lastName = editedBasicUserData.lastName;
      username = editedBasicUserData.username;
      email = editedUserEmail;
    } else if (accountData) {
      firstName = accountData.firstName;
      lastName = accountData.lastName;
      username = accountData.username;
      email = accountData.email;
    }
    if (ownerAccountDeleted) {
      logOut(z);
      return <Redirect to="/" />;
    } else if (clientAccountDeleted) {
      logOut(z);
      return <Redirect to="/" />;
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.infoContent}>Ustawienia konta</div>
        <div className={styles.content}>
          <div className={styles.title}>Podstawowe dane</div>
          {userWantEditData ? (
            <Formik
              initialValues={{
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email
              }}
              onSubmit={values => {
                firstName = values.firstName;
                lastName = values.lastName;
                username = values.username;
                email = values.email;
                editUserData(z, firstName, lastName, username);
                editUserEmail(z, email);
                this.setState(() => ({ userWantEditData: null }));
              }}
            >
              {({ errors, touched }) => (
                <Form className={styles.userEditDataForm}>
                  <div className={styles.inputElement}>
                    <label htmlFor="firstName">Imię</label>
                    <Field
                      type="text"
                      name="firstName"
                      validate={this.validateFirstname}
                      className={styles.input}
                    />
                    <div className={styles.formItemBar} />
                    {errors.firstName && touched.firstName && (
                      <div>{errors.firstName}</div>
                    )}
                  </div>
                  <br />
                  <div className={styles.inputElement}>
                    <label htmlFor="lastName">Nazwisko</label>
                    <Field
                      type="text"
                      name="lastName"
                      validate={this.validateLastname}
                      className={styles.input}
                    />
                    <div className={styles.formItemBar} />
                    {errors.lastName && touched.lastName && (
                      <div>{errors.lastName}</div>
                    )}
                  </div>
                  <br />
                  <div className={styles.inputElement}>
                    <label htmlFor="username">Nazwa użytkownika</label>
                    <Field
                      type="text"
                      name="username"
                      validate={this.validateUsername}
                      className={styles.input}
                    />
                    <div className={styles.formItemBar} />
                    {errors.username && touched.username && (
                      <div>{errors.username}</div>
                    )}
                  </div>
                  <br />
                  <div className={styles.inputElement}>
                    <label htmlFor="email">Email</label>
                    <Field
                      type="text"
                      name="email"
                      validate={this.validateEmail}
                      className={styles.input}
                    />
                    <div className={styles.formItemBar} />
                    {errors.email && touched.email && <div>{errors.email}</div>}
                  </div>
                  <br />
                  <Button second type="submit" className={styles.button}>
                    Zapisz zmiany
                  </Button>
                </Form>
              )}
            </Formik>
          ) : (
            <div className={styles.basicData}>
              {provider === "facebook.com" || provider === "google.com" ? (
                <div className={styles.info}>Nazwa użytkownika: {username}</div>
              ) : (
                <div>
                  <div className={styles.info}>Imię: {firstName}</div>
                  <div className={styles.info}>Nazwisko: {lastName}</div>
                  <div className={styles.info}>
                    Nazwa użytkownika: {username}
                  </div>
                  <div className={styles.info}>Email: {email}</div>
                </div>
              )}

              <div className={styles.buttonBasicData}>
                {provider === "facebook.com" ||
                provider === "google.com" ? null : (
                  <Button second onClick={this.editUserData}>
                    Edytuj dane
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Konto właściciela</div>
          {maybeWillBecomeOwner ? (
            <div>
              <div className={styles.info}>
                <div>Zgłoszenie zostało przyjęte</div>
                <div>Odezwiemy się do Ciebie w tej sprawie drogą mailową</div>
              </div>
              <div className={styles.button}>
                <Button second onClick={this.scratchAdvance}>
                  Wycofaj zgłoszenie
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.info}>
                Aktulanie nie posiadasz konta właściciela
              </div>
              <div className={styles.button}>
                <Button second onClick={this.userWantsToBecomeOwner}>
                  Chcę zostać właścicielem
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.content}>
          {provider === "facebook.com" || provider === "google.com" ? null : (
            <div>
              <div className={styles.title}>Zarządzaj hasłem</div>
              {userWantEditPassword ? (
                <Formik
                  initialValues={{
                    password1: "",
                    password2: ""
                  }}
                  validationSchema={validateSchema}
                  onSubmit={values => {
                    let password = values.newPassword;
                    editUserPassword(z, password);
                    this.setState(() => ({ userWantEditPassword: null }));
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className={styles.userEditDataForm}>
                      <div className={styles.inputElement}>
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
                      <br />
                      <Button second type="submit" className={styles.button}>
                        Zapisz zmiany
                      </Button>
                    </Form>
                  )}
                </Formik>
              ) : (
                <div>
                  {editedUserPassword ? (
                    <div>
                      <div className={styles.info}>
                        Twoje hasło zostało zmienione
                      </div>
                      <div className={styles.button}>
                        <Button second onClick={this.editUserPassword}>
                          Chcę zmienić hasło
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className={styles.button}>
                      <Button second onClick={this.editUserPassword}>
                        Chcę zmienić hasło
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Zarządzaj kontem</div>
          <div className={styles.button}>
            <Button second onClick={this.deleteAccount}>
              Usuń moje konto
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    accountData: state.accountSettings.accountData,
    editedBasicUserData: state.accountSettings.editedBasicUserData,
    editedUserEmail: state.accountSettings.editedUserEmail,
    editedUserPassword: state.accountSettings.editedUserPassword,
    userRule: state.auth.userRule,
    ownerAccountDeleted: state.accountSettings.ownerAccountDeleted,
    clientAccountDeleted: state.accountSettings.clientAccountDeleted,
    userGoogleId: state.auth.userGoogleId,
    userFbId: state.auth.idFb,
    provider: state.auth.provider
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserData: sendedRequest => dispatch(actions.getUserData(sendedRequest)),
    editUserData: (z, firstName, lastName, username) =>
      dispatch(actions.editUserData(z, firstName, lastName, username)),
    editUserEmail: (z, email) => dispatch(actions.editUserEmail(z, email)),
    editUserPassword: (z, password) =>
      dispatch(actions.editUserPassword(z, password)),
    deleteOwnerAccount: z => dispatch(actions.deleteOwnerAccount(z)),
    deleteClientAccount: z => dispatch(actions.deleteClientAccount(z)),
    logOut: z => dispatch(actions.logOut(z))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
