import React from "react";
import styles from "./OpinionForm.module.scss";
import { Formik, Form, Field } from "formik";
import Button from "../../../../../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../../../../store/actions/index";

class OpinionForm extends React.Component {
  state = {
    errorAddclientOpinion: ""
  };
  validateClientOpinion = value => {
    let error;
    if (!value) {
      error = "Musisz podać treść opinii";
    }
    return error;
  };
  render() {
    const { haveEatingPlace, z } = this.props;
    let eatingPlaceId;
    if (haveEatingPlace) {
      eatingPlaceId = haveEatingPlace.id;
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <Formik
            initialValues={{
              textofOpinion: ""
            }}
            onSubmit={clientOpinion => {
              let blockedOpinionForm = false;
              this.props.sendClientOpinion(
                clientOpinion.textofOpinion,
                eatingPlaceId,
                z,
                blockedOpinionForm
              );
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.header}>Napisz opinię</div>
                <div className={styles.formItem}>
                  <Field
                    name="textofOpinion"
                    component="textarea"
                    validate={this.validateClientOpinion}
                    placeholder="Podaj treść opinii"
                    className={styles.commentArea}
                  />
                  {errors.textofOpinion && touched.textofOpinion && (
                    <div>{errors.textofOpinion}</div>
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

const mapStateToProps = state => {
  return {
    haveEatingPlace: state.auth.haveEatingPlace,
    z: state.auth.z
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendClientOpinion: (clientOpinion, eatingPlaceId, z, blockOpinionForm) =>
      dispatch(
        actions.sendClientOpinion(
          clientOpinion,
          eatingPlaceId,
          z,
          blockOpinionForm
        )
      )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OpinionForm);
