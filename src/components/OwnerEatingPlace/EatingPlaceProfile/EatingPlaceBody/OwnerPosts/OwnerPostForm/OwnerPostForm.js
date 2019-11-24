import React from "react";
import styles from "./OwnerPostForm.module.scss";
import Input from "../../../../../Input/Input";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as actions from "../../../../../../store/actions/index";
import Button from "../../../../../Button/Button";
class OwnerPostForm extends React.Component {
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
