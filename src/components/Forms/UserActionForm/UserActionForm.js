import React from "react";
import styles from "./UserActionForm.module.scss";
import app from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import { config } from "../../../configs/firebaseConfig";
import Title from "../../Title/Title";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

const UserActionForm = ({ ...props }) => {
  let params = new URLSearchParams(document.location.search.substring(1));
  let mode = params.get("mode");

  console.log("This is mode", mode);
  const oobCode = params.get("oobCode");
  console.log("This is oobCode", oobCode);

  if (mode === "verifyEmail") {
    props.userVerifyEmail(mode, oobCode);
    let verificatedEmail = props.verificatedEmail;
    if (verificatedEmail === true) {
      return (
        <div className={styles.wrapper}>
          <Title>Twoje konto zostało aktywowane</Title>
          <a href="http://localhost:3000/login">Tutaj możesz się zalogować</a>
        </div>
      );
    } else {
      return (
        <div className={styles.wrapper}>
          <Title>
            Link został już użyty, więc konto już zostało wcześniej aktywowane
          </Title>
        </div>
      );
    }
  }
};

const mapStateToProps = state => {
  return {
    verificatedEmail: state.userAction.verificatedEmail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userVerifyEmail: (mode, oobCode) =>
      dispatch(actions.userVerifyEmail(mode, oobCode))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserActionForm);
