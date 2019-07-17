import React from "react";
import styles from "./Button.module.scss";
const Button = ({ children, second }) => {
  return (
    <button className={second ? styles.second : styles.button}>
      {children}
    </button>
  );
};

export default Button;
