import React from "react";
import styles from "./OwnerPostForm.module.scss";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as actions from "../../../../../../store/actions/index";
import Button from "../../../../../Button/Button";
class OwnerPostForm extends React.Component {
  state = {
    errorAddOwnerPost: ""
  };

  validateOwnerPost = value => {
    let error;
    if (!value) {
      error = "Musisz podać treść posta";
    }
    return error;
  };
  render() {
    const { haveEatingPlace } = this.props;
    let eatingPlaceName;
    let eatingPlaceId;
    if (haveEatingPlace) {
      eatingPlaceName = haveEatingPlace.info.restaurantName;
      eatingPlaceId = haveEatingPlace.id;
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <Formik
            initialValues={{
              textOfPost: ""
            }}
            onSubmit={value => {
              this.props.sendOwnerPost(
                value.textOfPost,
                eatingPlaceName,
                eatingPlaceId
              );
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.formItem}>
                  <Field
                    name="textOfPost"
                    component="textarea"
                    validate={this.validateOwnerPost}
                    placeholder="Podaj treść posta"
                    className={styles.commentArea}
                  />
                  {errors.textOfPost && touched.textOfPost && (
                    <div>{errors.textOfPost}</div>
                  )}

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
  return {
    haveEatingPlace: state.auth.haveEatingPlace
  };
};
const mapDispatchToProps = dispatch => {
  return {
    sendOwnerPost: (post, eatingPlaceName, eatingPlaceId) =>
      dispatch(actions.sendOwnerPost(post, eatingPlaceName, eatingPlaceId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnerPostForm);