import React from "react";
import styles from "./OwnerPostForm.module.scss";
import Input from "../../../../../Input/Input";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as actions from "../../../../../../store/actions/index";
import Button from "../../../../../Button/Button";
class OwnerPostForm extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <Formik
            initialValues={{
              textOfPost: ""
            }}
            onSubmit={values => {
              console.log(values);
              this.props.sendOwnerPost(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.formItem}>
                  <Field
                    name="textOfPost"
                    component="textarea"
                    validate=""
                    placeholder="Podaj treść posta"
                    className={styles.commentArea}
                  />
                  <br />
                  <Button second type="submit">
                    Wyślij
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
          {/* // <div className={styles.formItem}>
          //   <textarea className={styles.commentArea}></textarea>
          //   <button className={styles.button}>Wyślij</button>
          // </div> */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    sendOwnerPost: values => dispatch(actions.sendOwnerPost(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnerPostForm);
