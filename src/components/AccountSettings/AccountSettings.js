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
          <div className={styles.basicData}>
            <div className={styles.info}>Imię: ghghhhghgh</div>
            <div className={styles.info}>Nazwisko: ghghhhghgh</div>
            <div className={styles.info}>Nazwa użytkownika: ghghhhghgh</div>
            <div className={styles.info}>Email: ghghhhghgh</div>
          </div>
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
const mapDispatchToProps = dispatch => {
  return {
    getUserData: sendedRequest => dispatch(actions.getUserData(sendedRequest))
  };
};

export default connect(null, mapDispatchToProps)(AccountSettings);
