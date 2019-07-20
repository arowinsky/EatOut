import React from "react";
import styles from "./FormRegister.module.scss";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Title from "../../Title/Title";

const FormRegister = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Dołącz do nas:</Title>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
      <Input type="text" name="firstname" label="Podaj Imię" maxLength={30} />
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
      />
      <Button second type="submit">
        Dołącz teraz
      </Button>
    </form>
  </div>
);

export default FormRegister;