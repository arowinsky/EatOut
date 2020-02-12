import React from "react";
import styles from "./OwnerPostForm.module.scss";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
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
    const { eatingPlace, addedOwnerPost } = this.props;
    let eatingPlaceName;
    let eatingPlaceId;
    if (eatingPlace) {
      eatingPlaceName = eatingPlace.info.restaurantName;
      eatingPlaceId = eatingPlace.id;
    }
    return (
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <Formik
            initialValues={{
              textOfPost: ""
            }}
            onSubmit={value => {
              this.props.addOwnerPost(
                value.textOfPost,
                eatingPlaceName,
                eatingPlaceId
              );
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className={styles.formItem}>
                  {addedOwnerPost ? (
                    <div className={styles.addedOwnerPost}>
                      <p>Twój post został dodany</p>
                    </div>
                  ) : null}
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
                  <div className={styles.button}>
                    <Button second type="submit">
                      Wyślij
                    </Button>
                  </div>
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
    addedOwnerPost: state.eatingPlaceProfile.addedOwnerPost
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addOwnerPost: (post, eatingPlaceName, eatingPlaceId) =>
      dispatch(actions.addOwnerPost(post, eatingPlaceName, eatingPlaceId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnerPostForm);
