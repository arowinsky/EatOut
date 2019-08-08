import React from "react";
import styles from "./RegisterForm.module.scss";
import Button from "../../Button/Button";
import Input from "../../Input/Input";
import Title from "../../Title/Title";

class RegisterForm extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password1: "",
    password2: "",
    statute: ""
  };

  dataHandler = e => {  
    const {
      target: {name, value}
    } = e;

    if (e.target.type === 'checkbox') {
      this.setState({[name]: e.target.checked})
    }
    else { this.setState({[name]: value})}
    
  }
  addUser = e => {
    e.preventDefault();

    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
    console.log(e.target[4].value);
    console.log(e.target[5].value);
    console.log(e.target[6].checked);

    e.target.reset();
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Title>Rejestracja:</Title>
        <form
          autoComplete="off"
          className={styles.form}
          onSubmit={this.addUser}
        >
          <Input type="text" dataHandler={this.dataHandler} name="firstname" label="Podaj Imię" />
          <Input type="text" dataHandler={this.dataHandler} name="lastname" label=" Podaj Nazwisko" />
          <Input type="text" dataHandler={this.dataHandler} name="email" label="Podaj adres e-mail" />
          <Input type="text" dataHandler={this.dataHandler} name="username" label="Podaj nazwę użytkownika" />
          <Input type="password" dataHandler={this.dataHandler} name="password1" label="Podaj hasło" />
          <Input type="password" dataHandler={this.dataHandler} name="password2" label="Powtórz hasło" />
          <Input
            dataHandler={this.dataHandler}
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
