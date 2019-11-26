import React from "react";
import styles from "./GeneratorCodeForClient.module.scss";
import Button from "../../../Button/Button";
import { Link } from "react-router-dom";
const GeneratorCodeForClient = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        <p>
          Czy wygenerować kod dający dostęp Twojemu klientowi do wystawienia
          opinii o Twoim lokalu gastronomicznym?
        </p>
        <Button second type="submit">
          Tak wygeneruj
        </Button>
        <br />
        <Button second type="submit">
          <Link to="/eating-place-profile" className={styles.button}>
            Chcę powrócić do profilu tego lokalu
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default GeneratorCodeForClient;
