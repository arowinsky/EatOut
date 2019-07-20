import React from "react";
import styles from "./Button.module.scss";
const Button = ({ children, second, ...props }) => {
  return (
    <button {...props} className={second ? styles.second : styles.button}>
      {children}
    </button>
  );
};

export default Button;
