import React from "react";
import styles from "./RegisterForm.module.scss";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Title from "../../Title/Title";

class RegisterForm extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Title>Rejestracja:</Title>
        <form autoComplete="off" className={styles.form}>
          <Input
            type="text"
            name="firstname"
            label="Podaj Imię"
            maxLength={30}
          />
          <Input
            type="text"
            name="lastname"
            label=" Podaj Nazwisko"
            maxLength={20}
          />
          <Input
            type="text"
            name="email"
            label="Podaj adres e-mail"
            maxLength={20}
          />
          <Input
            type="text"
            name="username"
            label="Podaj nazwę użytkownika"
            maxLength={20}
          />
          <Input
            type="password"
            name="password1"
            label="Podaj hasło"
            maxLength={20}
          />
          <Input
            type="password"
            name="password2"
            label="Powtórz hasło"
            maxLength={20}
          />
          <Input
            checkbox
            type="checkbox"
            name="statute"
            label="Akceptuję regulamin serwisu"
            className={styles.confirm}
          />
          <Button second type="submit">
            Zarejestruj
          </Button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
