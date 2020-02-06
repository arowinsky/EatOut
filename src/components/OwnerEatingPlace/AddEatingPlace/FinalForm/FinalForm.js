import React from "react";
import styles from "../AddEatingPlace.module.scss";
import { Formik, Form } from "formik";
import Button from "../../../Button/Button";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import { Redirect } from "react-router-dom";

class FinalForm extends React.Component {
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

  render() {
    let dataNewEatingPlace;
    const { restaurantAvatar, restaurantHeader, restaurantMenu } = this.state;
    const {
      addedPlace,
      uploadFailImagesEatingPlace,
      unavailableAllImageEatingPlace,
      invalidFormatImagesEatingPlace,
      notAddedEatingPlace
    } = this.props;
    let invalidAvatar;
    let invalidHeader;
    let invalidMenu;
    let avatarFail;
    let headerFail;
    let menuFail;
    let notAdded;
    if (uploadFailImagesEatingPlace) {
      avatarFail = uploadFailImagesEatingPlace.avatarFail;
      headerFail = uploadFailImagesEatingPlace.headerFail;
      menuFail = uploadFailImagesEatingPlace.menuFail;
    }
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
    if (notAddedEatingPlace) {
      notAdded = notAddedEatingPlace;
    }
    console.log(addedPlace);
    if (addedPlace) {
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
            this.props.addNewEatingPlace(
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
              {notAdded ? (
                <div className={styles.inputElement}>
                  <p>
                    Coś poszło nie tak. Spróbuj ponownie kliknąć przycisk "Załóż
                    profil lokalu"
                  </p>
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
                {avatarFail ? (
                  <div className={styles.inputElement}>
                    <p>Nie udało się przesłać tego pliku. Spróbuj ponownie</p>
                  </div>
                ) : null}
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
                {headerFail ? (
                  <div className={styles.inputElement}>
                    <p>Nie udało się przesłać tego pliku. Spróbuj ponownie</p>
                  </div>
                ) : null}
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
                {menuFail ? (
                  <div className={styles.inputElement}>
                    <p>Nie udało się przesłać tego pliku. Spróbuj ponownie</p>
                  </div>
                ) : null}
                {invalidMenu ? (
                  <div className={styles.inputElement}>
                    <p>Nie poprawny format pliku</p>
                  </div>
                ) : null}
              </div>

              <Button second type="submit" className={styles.button}>
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
    addedPlace: state.addNewEatingPlace.addedPlace,
    unavailableAllImageEatingPlace:
      state.addNewEatingPlace.unavailableAllImageEatingPlace,
    invalidFormatImagesEatingPlace:
      state.addNewEatingPlace.invalidFormatImagesEatingPlace,
    uploadFailImagesEatingPlace:
      state.addNewEatingPlace.uploadFailImagesEatingPlace,
    notAddedEatingPlace: state.addNewEatingPlace.notAddedEatingPlace
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
        actions.addNewEatingPlace(
          dataNewEatingPlace,
          restaurantAvatar,
          restaurantHeader,
          restaurantMenu
        )
      )
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FinalForm);
