import React from "react";
import styles from "./AccountSettings.module.scss";
import Button from "../Button/Button";
class AccountSettings extends React.Component {
  render() {
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
export default AccountSettings;
