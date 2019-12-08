import React from "react";
import styles from "../AddEatingPlace.module.scss";
import { Formik, Form } from "formik";
import Button from "../../../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import { Redirect } from "react-router-dom";

class UploadingPhotosForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantAvatar: null,
      restaurantHeader: null,
      restaurantMenu: null,
      errorRestaurantAvatar: "",
      errorRestaurantHeader: "",
      errorRestaurantMenu: ""
    };
    this.handleRestaurantAvatar = this.handleRestaurantAvatar.bind(this);
  }

  handleRestaurantAvatar = (e, value) => {
    if (e.target.files[0]) {
      const restaurantAvatar = e.target.files[0];
      this.setState(() => ({ restaurantAvatar }));
    }
  };

  handleRestaurantHeader = e => {
    if (e.target.files[0]) {
      const restaurantHeader = e.target.files[0];
      this.setState(() => ({ restaurantHeader }));
    }
  };
  handleRestaurantMenu = e => {
    if (e.target.files[0]) {
      const restaurantMenu = e.target.files[0];
      this.setState(() => ({ restaurantMenu }));
    }
  };
  handleUploadImagesEatingPlace = e => {
    const { restaurantAvatar, restaurantHeader, restaurantMenu } = this.state;
    this.props.uploadImagesEatingPlace(
      restaurantAvatar,
      restaurantHeader,
      restaurantMenu
    );
  };

  render() {
    let dataNewEatingPlace;
    const { restaurantAvatar, restaurantHeader, restaurantMenu } = this.state;
    const {
      uploadedEatingPlaceImages,
      unavailableAllImageEatingPlace,
      invalidFormatImagesEatingPlace
    } = this.props;
    let invalidAvatar;
    let invalidHeader;
    let invalidMenu;
    if (invalidFormatImagesEatingPlace) {
      invalidAvatar = invalidFormatImagesEatingPlace.errorAvatar;
      invalidHeader = invalidFormatImagesEatingPlace.errorHeader;
      invalidMenu = invalidFormatImagesEatingPlace.errorMenu;
    }
    if (this.props.location.state) {
      console.log(this.props.location.state);
      dataNewEatingPlace = this.props.location.state.dataNewEatingPlace;
    }
    if (!dataNewEatingPlace) {
      return <Redirect to="/" />;
    }
    console.log(uploadedEatingPlaceImages);
    if (uploadedEatingPlaceImages) {
      return <Redirect to="/owner-home" />;
    }
    console.log(restaurantAvatar, restaurantHeader, restaurantMenu);
    return (
      <div className={styles.restaurantFormWrapper}>
        <div className={styles.formTitle}>Dodaj jeszcze zdjęcia lokalu</div>
        <Formik
          initialValues={{}}
          onSubmit={errors => {
            console.log(errors);
            if (errors) {
              this.setState({ noErrorsValidations: true });
            }
            this.props.uploadImagesEatingPlace(
              dataNewEatingPlace,
              restaurantAvatar,
              restaurantHeader,
              restaurantMenu
            );
          }}
        >
          {() => (
            <Form
              className={styles.restaurantForm}
              enctype="multipart/form-data"
            >
              <div className={styles.inputElement}>
                <p>Dopuszczalne formaty zdjęć to:</p>
                <p className={styles.formatsFiles}>.jpeg, .jpg, .png, .bmp</p>
              </div>
              <br />
              {unavailableAllImageEatingPlace ? (
                <div className={styles.inputElement}>
                  <p>Nie dodałaś/eś wszystkich zdjęć lokalu</p>
                </div>
              ) : null}
              <div className={styles.inputElement}>
                <label htmlFor="restaurantAvatar">
                  Wybierz zdjęcie profilowe
                </label>
                <input
                  type="file"
                  name="restaurantAvatar"
                  className={styles.inputFile}
                  onChange={this.handleRestaurantAvatar}
                />
                {invalidAvatar ? (
                  <div className={styles.inputElement}>
                    <p>Nie poprawny format pliku</p>
                  </div>
                ) : null}
              </div>
              <br />
              <br />
              <div className={styles.inputElement}>
                <label htmlFor="restaurantHeader">
                  Wybierz zdjęcie banerowe
                </label>
                <input
                  type="file"
                  name="restaurantHeader"
                  className={styles.inputFile}
                  onChange={this.handleRestaurantHeader}
                />
                {invalidHeader ? (
                  <div className={styles.inputElement}>
                    <p>Nie poprawny format pliku</p>
                  </div>
                ) : null}
              </div>
              <br />
              <br />
              <div className={styles.inputElement}>
                <label htmlFor="restaurantMenu">Wybierz zdjęcie menu</label>
                <input
                  type="file"
                  name="restaurantMenu"
                  className={styles.inputFile}
                  onChange={this.handleRestaurantMenu}
                />
                {invalidMenu ? (
                  <div className={styles.inputElement}>
                    <p>Nie poprawny format pliku</p>
                  </div>
                ) : null}
              </div>

              <Button
                second
                type="submit"
                className={styles.button}
                onClick={this.handleUploadImagesEatingPlace}
              >
                Załóż profil lokalu
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    uploadedEatingPlaceImages:
      state.eatingPlaceProfile.uploadedEatingPlaceImages,
    unavailableAllImageEatingPlace:
      state.eatingPlaceProfile.unavailableAllImageEatingPlace,
    invalidFormatImagesEatingPlace:
      state.eatingPlaceProfile.invalidFormatImagesEatingPlace
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addNewEatingPlace: (
      dataNewEatingPlace,
      restaurantAvatar,
      restaurantHeader,
      restaurantMenu
    ) =>
      dispatch(
        actions.uploadImagesEatingPlace(
          dataNewEatingPlace,
          restaurantAvatar,
          restaurantHeader,
          restaurantMenu
        )
      )
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadingPhotosForm);
