import React from "react";
import styles from "./AccountSettings.module.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import { Formik, Form, Field, ErrorMessage } from "formik";
class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendedRequest: null,
      userWantEditData: null
    };
  }

  editUserData = () => {
    this.setState(() => ({ userWantEditData: true }));
  };
  render() {
    const { sendedRequest, userWantEditData } = this.state;
    const {
      accountData,
      editUserData,
      editedBasicUserData,
      editUserEmail,
      editedUserEmail
    } = this.props;
    console.log(accountData);
    console.log(editedBasicUserData);
    console.log(editedUserEmail);
    let lastName;
    let firstName;
    let username;
    let email;
    if (sendedRequest === null) {
      this.setState({ sendedRequest: true });
      let z = localStorage.getItem("z");
      console.log(z);
      this.props.getUserData(z);
    }
    if (accountData) {
      firstName = accountData.firstName;
      lastName = accountData.lastName;
      username = accountData.username;
      email = accountData.email;
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
                let z = localStorage.getItem("z");
                firstName = values.firstName;
                lastName = values.lastName;
                username = values.username;
                email = values.email;
                console.log(z, firstName, lastName, username);
                editUserData(z, firstName, lastName, username);
                editUserEmail(z, email);
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
          <div className={styles.button}>
            <Button second>Chcę zmienić hasło</Button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Zarządzaj kontem</div>
          <div className={styles.button}>
            <Button second>Usuń moje konto</Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state.accountSettings.accountData);
  return {
    accountData: state.accountSettings.accountData,
    editedBasicUserData: state.accountSettings.editedBasicUserData,
    editedUserEmail: state.accountSettings.editedUserEmail
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserData: sendedRequest => dispatch(actions.getUserData(sendedRequest)),
    editUserData: (z, firstName, lastName, username) =>
      dispatch(actions.editUserData(z, firstName, lastName, username)),
    editUserEmail: (z, email) => dispatch(actions.editUserEmail(z, email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
