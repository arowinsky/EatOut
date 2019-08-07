import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ type, name, maxLength, label, checkbox, value }) => (
  <div className={styles.formItem}>
    <input
      type={type}
      className={checkbox ? styles.checkbox : styles.input}
      name={name}
      id={name}
      placeholder=" "
      required
      maxLength={maxLength}
      value={value}
    />
    <label htmlFor={name} className={styles.label}>
      {label}
    </label>
    <div className={checkbox ? styles.checkbox : styles.formItemBar} />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  maxLength: PropTypes.number
};

Input.defaultProps = {
  type: "text",
  maxLength: 50
};

export default Input;
