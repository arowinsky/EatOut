import React from "react";
import styles from "./AccountSettings.module.scss";
import Button from "../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sendedRequest: null
    };
  }
  render() {
    const { sendedRequest } = this.state;
    const { accountData } = this.props;
    console.log(accountData);
    if (sendedRequest === null) {
      this.setState({ sendedRequest: true });
      let z = localStorage.getItem("z");
      console.log(z);
      this.props.getUserData(z);
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.infoContent}>Ustawienia konta</div>

        <div className={styles.content}>
          <div className={styles.title}>Podstawowe dane</div>
          {accountData ? (
            <div className={styles.basicData}>
              <div className={styles.info}>Imię: {accountData.firstName}</div>
              <div className={styles.info}>
                Nazwisko: {accountData.lastName}
              </div>
              <div className={styles.info}>
                Nazwa użytkownika: {accountData.username}
              </div>
              <div className={styles.info}>Email: {accountData.email}</div>
            </div>
          ) : null}
          <div className={styles.buttonBasicData}>
            <Button second>Edytuj dane</Button>
          </div>
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
    accountData: state.accountSettings.accountData
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserData: sendedRequest => dispatch(actions.getUserData(sendedRequest))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSettings);
