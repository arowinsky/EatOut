import React from "react";
import styles from "./InfoForRegisteredUser.module.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
class InfoForRegisteredUser extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.items}>
          <p>
            Rejstracja udana. Wysłaliśmy na podany mail link aktywacyjny sprawdź
            pocztę. W razie braku maila w głównym katalogu sprawdź także spam
          </p>
          <Button second type="submit">
            <Link className={styles.button}>Chce wyszukać lokal</Link>
          </Button>
          <br />
          <Button second type="submit">
            <Link to="/login" className={styles.button}>
              Chce się zalogować
            </Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default InfoForRegisteredUser;
