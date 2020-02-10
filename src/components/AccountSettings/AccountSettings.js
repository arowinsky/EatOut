import React from "react";
import styles from "./AccountSettings.module.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Formik, Form, Field } from "formik";
import { Redirect } from "react-router-dom";
class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendedRequest: null,
      userWantEditData: null,
      userWantEditPassword: null
    };
  }

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

  render() {
    const {
      sendedRequest,
      userWantEditData,
      userWantEditPassword
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
      logOut
    } = this.props;
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
              {() => (
                <Form className={styles.userEditDataForm}>
                  <div className={styles.inputElement}>
                    <label htmlFor="firstName">Imię</label>
                    <Field
                      type="text"
                      name="firstName"
                      className={styles.input}
                    />
                  </div>
                  <br />
                  <div className={styles.inputElement}>
                    <label htmlFor="lastName">Nazwisko</label>
                    <Field
                      type="text"
                      name="lastName"
                      className={styles.input}
                    />
                  </div>
                  <br />
                  <div className={styles.inputElement}>
                    <label htmlFor="username">Nazwa użytkownika</label>
                    <Field
                      type="text"
                      name="username"
                      className={styles.input}
                    />
                  </div>
                  <br />
                  <div className={styles.inputElement}>
                    <label htmlFor="email">Email</label>
                    <Field type="text" name="email" className={styles.input} />
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
              <div className={styles.info}>Imię: {firstName}</div>
              <div className={styles.info}>Nazwisko: {lastName}</div>
              <div className={styles.info}>Nazwa użytkownika: {username}</div>
              <div className={styles.info}>Email: {email}</div>
              <div className={styles.buttonBasicData}>
                <Button second onClick={this.editUserData}>
                  Edytuj dane
                </Button>
              </div>
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Konto właściciela</div>
          <div className={styles.info}>
            Aktulanie nie posiadasz konta właściciela
          </div>
          <div className={styles.button}>
            <Button second>Chcę zostać właścicielem</Button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Zarządzaj hasłem</div>
          {userWantEditPassword ? (
            <Formik
              initialValues={{
                newPassword: ""
              }}
              onSubmit={values => {
                let password = values.newPassword;
                editUserPassword(z, password);
                this.setState(() => ({ userWantEditPassword: null }));
              }}
            >
              {() => (
                <Form className={styles.userEditDataForm}>
                  <div className={styles.inputElement}>
                    <label htmlFor="firstName">Podaj nowe hasło</label>
                    <Field
                      type="password"
                      name="newPassword"
                      className={styles.input}
                    />
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
                <div>Twoje hasło zostało zmienione</div>
              ) : null}
              <br />
              <div className={styles.button}>
                <Button second onClick={this.editUserPassword}>
                  Chcę zmienić hasło
                </Button>
              </div>
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
    clientAccountDeleted: state.accountSettings.clientAccountDeleted
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
