import React from "react";
import styles from "../AddEatingPlace.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../Button/Button";
import { connect } from "react-redux";
import storage from "../../../../configs/firebaseConfig";
import { Redirect } from "react-router-dom";

class NewLocalFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantAvatar: null,
      restaurantHeader: null,
      restaurantMenu: null,
      uploadedRestaurantAvatar: null,
      uploadedRestaurantHeader: null,
      uploadedRestaurantMenu: null
    };
    this.handleRestaurantAvatar = this.handleRestaurantAvatar.bind(this);
    this.handleUploadImagesRestaurant = this.handleUploadImagesRestaurant.bind(
      this
    );
  }
  handleRestaurantAvatar = e => {
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

  handleUploadImagesRestaurant = e => {
    const { restaurantAvatar, restaurantHeader, restaurantMenu } = this.state;
    const { userId } = this.props;
    const uploadRestaurantAvatar = storage
      .ref(`${userId}/restaurantAvatar`)
      .put(restaurantAvatar);
    uploadRestaurantAvatar.on(
      "state_changed",
      snapshot => {
        const uploadedRestaurantAvatar =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState(() => ({ uploadedRestaurantAvatar }));
      },
      error => {
        console.log(error);
      }
    );
    const uploadRestaurantHeader = storage
      .ref(`${userId}/restaurantHeader`)
      .put(restaurantHeader);
    uploadRestaurantHeader.on(
      "state_changed",
      snapshot => {
        const uploadedRestaurantHeader =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState(() => ({ uploadedRestaurantHeader }));
      },
      error => {
        console.log(error);
      }
    );

    const uploadRestaurantMenu = storage
      .ref(`${userId}/restaurantMenu`)
      .put(restaurantMenu);
    uploadRestaurantMenu.on(
      "state_changed",
      snapshot => {
        const uploadedRestaurantMenu =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState(() => ({ uploadedRestaurantMenu }));
      },
      error => {
        console.log(error);
      }
    );
  };

  render() {
    let test = false;
    const { set_first } = this.props;
    if (set_first === null) {
      test = true;
      this.props.test(test);
    }

    const {
      uploadedRestaurantAvatar,
      uploadedRestaurantHeader,
      uploadedRestaurantMenu
    } = this.state;
    if (
      uploadedRestaurantAvatar === 100 &&
      uploadedRestaurantHeader === 100 &&
      uploadedRestaurantMenu === 100
    ) {
      return <Redirect to="/add-eating-place-second-form" />;
    }
    return (
      <div className={styles.restaurantFormWrapper}>
        <div className={styles.formTitle}>Dodaj lokal</div>
        <Formik
          initialValues={{
            restaurantName: "",
            restaurantEmail: "",
            restaurantStreet: "",
            restaurantBuildingNumber: "",
            restaurantCity: "",
            restaurantPhoneNumber: "",
            restaurantAvatar: "",
            restaurantHeader: "",
            restaurantMenu: "",
            mondayOpenHour: "",
            mondayCloseHour: "",
            tuesdayOpenHour: "",
            tuesdayCloseHour: "",
            wednesdayOpenHour: "",
            wednesdayCloseHour: "",
            thursdayOpenHour: "",
            thursdayCloseHour: "",
            fridayOpenHour: "",
            fridayCloseHour: "",
            saturdayOpenHour: "",
            saturdayCloseHour: "",
            sundayOpenHour: "",
            sundayCloseHour: ""
          }}
          // validate={values => {
          //   let errors = {};
          //   if (!values.restaurantName) {
          //     errors.restaurantName = "Pole wymagane";
          //   }
          //   if (!values.restaurantStreet) {
          //     errors.restaurantStreet = "Pole wymagane";
          //   }
          //   // if (!values.restaurantEmail) {
          //   //   errors.restaurantEmail = "Pole wymagane";
          //   // } else if (
          //   //   !values.restaurantEmail ===
          //   //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
          //   // ) {
          //   //   errors.restaurantEmail = "Adres e-mail jest nieprawidłowy";
          //   // }
          //   // if (!values.restaurantPhoneNumber) {
          //   //   errors.restaurantPhoneNumber = "Pole wymagane";
          //   // } else if (
          //   //   !values.restaurantPhoneNumber ===
          //   //   !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i
          //   // ) {
          //   //   errors.restaurantPhoneNumber = "Nie poprawny numer telefonu";
          //   // }
          //   // if (!values.restaurantAvatar) {
          //   //   errors.restaurantAvatar = "Pole wymagane";
          //   // }
          //   // if (!values.restaurantHeader) {
          //   //   errors.restaurantHeader = "Pole wymagane";
          //   // }
          //   // if (!values.restaurantMenu) {
          //   //   errors.restaurantMenu = "Pole wymagane";
          //   // }
          // //   if (!values.mondayOpenHour || !values.mondayCloseHour) {
          // //     errors.mondayOpenHour = "Pole wymagane";
          // //   }
          // //   if (!values.tuesdayOpenHour || !values.tuesdayOpenHour) {
          // //     errors.tuesdayOpenHour = "Pole wymagane";
          // //   }
          // //   if (!values.wednesdayOpenHour || !values.wednesdayCloseHour) {
          // //     errors.wednesdayOpenHour = "Pole wymagane";
          // //   }
          // //   if (!values.thursdayOpenHour || !values.thursdayCloseHour) {
          // //     errors.thursdayOpenHour = "Pole wymagane";
          // //   }
          // //   if (!values.fridayOpenHour || !values.fridayCloseHour) {
          // //     errors.fridayOpenHour = "Pole wymagane";
          // //   }
          // //   if (!values.saturdayOpenHour || !values.saturdayCloseHour) {
          // //     errors.saturdayOpenHour = "Pole wymagane";
          // //   }
          // //   if (!values.sundayOpenHour || !values.sundayCloseHour) {
          // //     errors.sundayOpenHour = "Pole wymagane";
          // //   }
          // //   return errors;
          //  }}
          onSubmit={values => {
            console.log(values);
            localStorage.setItem("setFirst", JSON.stringify(values));
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.restaurantForm}>
              <div className={styles.inputElement}>
                <label htmlFor="restaurantName">Nazwa lokalu</label>
                <Field
                  type="text"
                  name="restaurantName"
                  className={styles.input}
                />
                <ErrorMessage name="restaurantName" component="div" />
              </div>
              <br />
              <br />
              <div className={styles.inputElement}>
                <label htmlFor="restaurantEmail">Adres email</label>
                <Field
                  type="text"
                  name="restaurantEmail"
                  className={styles.input}
                />
                <ErrorMessage name="restaurantEmail" component="div" />
              </div>
              <br />
              <br />
              <div className={styles.inputElement}>
                <label htmlFor="restaurantPhoneNumber">Numer telefonu</label>
                <Field
                  type="text"
                  name="restaurantPhoneNumber"
                  className={styles.input}
                />
                <ErrorMessage name="restaurantPhoneNumber" component="div" />
              </div>
              <br />
              <br />
              <div className={styles.formTitle}>Adres lokalu</div>
              <div className={styles.inputElement}>
                <label htmlFor="restaurantStreet">Nazwa ulicy</label>
                <Field
                  type="text"
                  name="restaurantStreet"
                  className={styles.input}
                />
                <ErrorMessage name="restaurantStreet" component="div" />
              </div>
              <br />
              <br />
              <div className={styles.inputElement}>
                <label htmlFor="restaurantBuildingNumber">Numer budynku</label>
                <Field
                  type="text"
                  name="restaurantBuildingNumber"
                  className={styles.input}
                />
                <ErrorMessage name="restaurantBuildingNumber" component="div" />
              </div>
              <br />
              <br />
              <div className={styles.inputElement}>
                <label htmlFor="restaurantCity">Miejscowość</label>
                <Field
                  type="text"
                  name="restaurantCity"
                  className={styles.input}
                />
                <ErrorMessage name="restaurantCity" component="div" />
              </div>
              <br />
              <br />
              <div className={styles.formTitle}>Zdjęcia lokalu</div>
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
                <ErrorMessage name="restaurantAvatar" component="div" />
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
                <ErrorMessage name="restaurantHeader" component="div" />
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
                <ErrorMessage name="restaurantMenu" component="div" />
              </div>
              <br />
              <br />
              <div className={styles.formTitle}>Godziny otwarcia lokalu</div>
              <div className={styles.hoursWrapper}>
                <div className={styles.hourLabel}>
                  <label
                    htmlFor="mondayOpenHour"
                    className={styles.labelMonday}
                  >
                    Poniedziałek
                  </label>
                </div>
                <div className={styles.hourElement}>
                  <Field
                    type="time"
                    name="mondayOpenHour"
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="mondayCloseHour"
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="mondayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                </div>
                <div className={styles.hourLabel}>
                  <label
                    htmlFor="tuesdayOpenHour"
                    className={styles.labelMonday}
                  >
                    Wtorek
                  </label>
                </div>
                <div className={styles.hourElement}>
                  <Field
                    type="time"
                    name="tuesdayOpenHour"
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="tuesdayCloseHour"
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="tuesdayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                </div>
                <div className={styles.hourLabel}>
                  <label
                    htmlFor="wednesdayOpenHour"
                    className={styles.labelMonday}
                  >
                    Środa
                  </label>
                </div>
                <div className={styles.hourElement}>
                  <Field
                    type="time"
                    name="wednesdayOpenHour"
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="wednesdayCloseHour"
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="wednesdayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                </div>
                <div className={styles.hourLabel}>
                  <label
                    htmlFor="thursdayOpenHour"
                    className={styles.labelMonday}
                  >
                    Czwartek
                  </label>
                </div>
                <div className={styles.hourElement}>
                  <Field
                    type="time"
                    name="thursdayOpenHour"
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="thursdayCloseHour"
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="thursdayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                </div>
                <div className={styles.hourLabel}>
                  <label
                    htmlFor="fridayOpenHour"
                    className={styles.labelMonday}
                  >
                    Piątek
                  </label>
                </div>
                <div className={styles.hourElement}>
                  <Field
                    type="time"
                    name="fridayOpenHour"
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="fridayCloseHour"
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="fridayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                </div>
                <div className={styles.hourLabel}>
                  <label
                    htmlFor="saturdayOpenHour"
                    className={styles.labelMonday}
                  >
                    Sobota
                  </label>
                </div>
                <div className={styles.hourElement}>
                  <Field
                    type="time"
                    name="saturdayOpenHour"
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="saturdayCloseHour"
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="saturdayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                </div>
                <div className={styles.hourLabel}>
                  <label
                    htmlFor="sundayOpenHour"
                    className={styles.labelMonday}
                  >
                    Niedziela
                  </label>
                </div>
                <div className={styles.hourElement}>
                  <Field
                    type="time"
                    name="sundayOpenHour"
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="sundayCloseHour"
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="sundayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                </div>
              </div>

              <Button
                second
                type="submit"
                className={styles.button}
                // disabled={isSubmitting}
                onClick={this.handleUploadImagesRestaurant}
              >
                Dalej
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
    userId: state.auth.userId
  };
};
export default connect(mapStateToProps, null)(NewLocalFirst);
