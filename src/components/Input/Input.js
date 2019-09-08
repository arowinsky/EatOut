import React from "react";

import classes from "./Input.module.scss";

const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
// import React from "react";
// import PropTypes from "prop-types";
// import styles from "./Input.module.scss";

// const Input = ({ type, name, maxLength, label, checkbox, value, dataHandler }) => (
//   <div className={styles.formItem}>
//     <input
//       type={type}
//       className={checkbox ? styles.checkbox : styles.input}
//       name={name}
//       id={name}
//       onChange={dataHandler}
//       placeholder=" "
//       required
//       maxLength={maxLength}
//       value={value}
//     />
//     <label htmlFor={name} className={styles.label}>
//       {label}
//     </label>
//     <div className={checkbox ? styles.checkbox : styles.formItemBar} />
//   </div>
// );

// Input.propTypes = {
//   name: PropTypes.string.isRequired,
//   label: PropTypes.string.isRequired,
//   type: PropTypes.string,
//   maxLength: PropTypes.number,
//   dataHandler: PropTypes.func,
// };

// Input.defaultProps = {
//   type: "text",
//   maxLength: 50
// };

// export default Input;
