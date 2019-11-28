import React from "react";
import styles from "./CodeForUnlockAddOpinion.module.scss";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import Button from "../../../../../Button/Button";
import * as actions from "../../../../../../store/actions/index";
class CodeForUnlockAddOpinion extends React.Component {
  state = {
    errorAddClientCode: ""
  };
  validateClientCode = value => {
    let error;
    if (!value) {
      error =
        "Musisz podać kod, który otrzymałaś/eś w tym lokalu gastronomicznym";
    }
    return error;
  };
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <Formik
            initialValues={{
              clientCode: ""
            }}
            onSubmit={code => {
              this.props.sendCodeToVerification(code.clientCode);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.formItem}>
                  <Field
                    name="clientCode"
                    type="text"
                    validate={this.validateClientCode}
                    placeholder="Podaj kod który dostałaś/eś w lokalu gastronomicznym"
                    className={styles.input}
                  />
                  <div className={styles.formItemBar} />
                  <br />
                  {errors.clientCode && touched.clientCode && (
                    <div>{errors.clientCode}</div>
                  )}
                  <br />
                  <Button second type="submit">
                    Wyślij
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendCodeToVerification: clientCode =>
      dispatch(actions.sendCodeToVerification(clientCode))
  };
};

export default connect(mapDispatchToProps)(CodeForUnlockAddOpinion);
