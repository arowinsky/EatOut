import React from "react";
import styles from "../NewLocalForm.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "./../../../Button/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";

class NewLocalResume extends React.Component {
  render() {
    const firstFormData = localStorage.getItem("setFirst");
    const secondFormData = localStorage.getItem("setSecond");
    console.log(firstFormData);
    console.log(secondFormData);
    return (
      <div className={styles.restaurantFormWrapper}>
        <div className={styles.formTitle}>Potwierdź dane:</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewLocalResume);
