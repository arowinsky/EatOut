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
    const { idAddedPlace, idOwnerAddedEatingPlace } = this.props.location.state;
    const { restaurantAvatar, restaurantHeader, restaurantMenu } = this.state;
    const { uploadedEatingPlaceImages } = this.props;
    console.log(uploadedEatingPlaceImages);
    if (uploadedEatingPlaceImages) {
      return <Redirect to="/owner-home" />;
    }
    console.log(restaurantAvatar, restaurantHeader, restaurantMenu);
    console.log(
      "TCL: UploadingPhotosForm -> render -> idAddedPlace, idOwnerAddedEatingPlace",
      idAddedPlace,
      idOwnerAddedEatingPlace
    );
    return (
      <div className={styles.restaurantFormWrapper}>
        <div className={styles.formTitle}>Dodaj jeszcze zdjęcia lokalu</div>
        <Formik
          initialValues={{}}
          onSubmit={(values, errors) => {
            console.log(errors);
            if (errors) {
              this.setState({ noErrorsValidations: true });
              localStorage.setItem("setFirst", JSON.stringify(values));
            }
            this.props.uploadImagesEatingPlace(
              restaurantAvatar,
              restaurantHeader,
              restaurantMenu,
              idAddedPlace,
              idOwnerAddedEatingPlace
            );
          }}
        >
          {({ errors, touched }) => (
            <Form
              className={styles.restaurantForm}
              enctype="multipart/form-data"
            >
              <div className={styles.inputElement}>
                {/* <div className={styles.formTitle}>
                  Zjęciamuszę być w formacie .JPEG
                </div> */}
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
                </div>
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
      state.eatingPlaceProfile.uploadedEatingPlaceImages
  };
};
const mapDispatchToProps = dispatch => {
  return {
    uploadImagesEatingPlace: (
      restaurantAvatar,
      idAddedPlace,
      idOwnerAddedEatingPlace,
      restaurantHeader,
      restaurantMenu
    ) =>
      dispatch(
        actions.uploadImagesEatingPlace(
          restaurantAvatar,
          idAddedPlace,
          idOwnerAddedEatingPlace,
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
