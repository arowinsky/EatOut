import React from "react";
import styles from "./LoginForm.module.scss";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Title from "../../Title/Title";

class LoginForm extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Title>Logowanie:</Title>
        <form autoComplete="off" className={styles.form}>
          <Input
            type="text"
            name="email"
            label="Podaj adres e-mail"
            maxLength={20}
          />
          <Input
            type="password"
            name="password1"
            label="Podaj hasło"
            maxLength={20}
          />
          <Button second type="submit">
            Zaloguj
          </Button>
        </form>
      </div>
    );
  }
}

export default LoginForm;