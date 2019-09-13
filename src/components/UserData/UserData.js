import React from "react";
import styles from "./UserData.module.scss";
import { connect } from "react-redux";

const UserData = ({ second, ...props }) => {
  return (
    <div className={second ? styles.second : styles.wrapper}>
      <div>{props.userInfo}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userInfo: state.auth.userData
  };
};

export default connect(mapStateToProps)(UserData);
