import React from "react";
import styles from "./LoginForm.module.scss";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Title from "../../Title/Title";

const LoginForm = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Logowanie:</Title>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
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

export default LoginForm;
