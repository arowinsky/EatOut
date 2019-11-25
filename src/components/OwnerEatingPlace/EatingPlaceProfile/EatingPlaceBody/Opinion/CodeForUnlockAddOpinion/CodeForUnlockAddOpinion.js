import React from "react";
import styles from "./CodeForUnlockAddOpinion.module.scss";
import { connect } from "react-redux";
import { Formik, Field, Form } from "formik";
import Button from "../../../../../Button/Button";
class CodeForUnlockAddOpinion extends React.Component {
  render() {
    const { haveEatingPlace } = this.props;
    let eatingPlaceId;
    if (haveEatingPlace) {
      eatingPlaceId = haveEatingPlace.id;
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <Formik
            initialValues={{
              unlockCode: ""
            }}
            onSubmit={value => {}}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.formItem}>
                  <Field
                    name="textOfPost"
                    type="text"
                    placeholder="Podaj kod który dostałeś/aś w lokalu gastronomicznym"
                    className={styles.input}
                  />
                  <div className={styles.formItemBar} />
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

const mapStateToProps = state => {
  return {
    haveEatingPlace: state.auth.haveEatingPlace
  };
};

export default connect(mapStateToProps)(CodeForUnlockAddOpinion);
