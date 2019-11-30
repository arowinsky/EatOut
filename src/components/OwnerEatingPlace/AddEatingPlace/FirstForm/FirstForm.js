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
      uploadedRestaurantMenu: null,
      noErrorsValidations: null,
      errorRestaurantName: "",
      errorRestaurantEmail: "",
      errorRestaurantStreet: "",
      errorRestaurantBuildingNumber: "",
      errorRestaurantCity: "",
      errorRestaurantPhoneNumber: ""
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
  validateRestaurantName = value => {
    let error;
    if (!value) {
      error = "Podaj nazwę lokalu";
      return error;
    }
  };

  validateRestaurantEmail = value => {
    let error;
    if (!value) {
      error = "Podaj adres email lokalu/właściela";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Adres e-mail jest nieprawidłowy";
    }
    return error;
  };
  validateRestaurantStreet = value => {
    let error;
    if (!value) {
      error = "Podaj nazwę ulicy, na której znajduje się lokal";
    } else if (!/[A-Za-z]/.test(value)) {
      error = "Nieprawidłowe nazwa ulicy";
    }
    return error;
  };
  validateRestaurantBuildingNumber = value => {
    let error;
    if (!value) {
      error = "Podaj numer budynku, w którym jest lokal";
    } else if (!/[0-9]/.test(value)) {
      error = "Numer budynku musi być liczbą";
    }
    return error;
  };
  validateRestaurantCity = value => {
    let error;
    if (!value) {
      error = "Podaj miasto, w którym jest lokal";
      return error;
    } else if (!/[A-Za-z]/.test(value)) {
      error = "Nieprawidłowe nazwa miasta";
    }
    return error;
  };
  validateRestaurantPhoneNumber = value => {
    let error;
    if (!value) {
      error = "Podaj numer telefonu do lokalu/właściela";
    } else if (
      !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(
        value
      )
    ) {
      error = "Nie poprawny numer telefonu";
    }
    return error;
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
      uploadedRestaurantMenu,
      noErrorsValidations
    } = this.state;
    console.log(noErrorsValidations);
    if (
      uploadedRestaurantAvatar === 100 &&
      uploadedRestaurantHeader === 100 &&
      uploadedRestaurantMenu === 100 &&
      noErrorsValidations === true
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
          onSubmit={(values, errors) => {
            console.log(errors);
            if (errors) {
              this.setState({ noErrorsValidations: true });
              localStorage.setItem("setFirst", JSON.stringify(values));
            }
          }}
        >
          {({ errors, touched }) => (
            <Form className={styles.restaurantForm}>
              <div className={styles.inputElement}>
                <label htmlFor="restaurantName">Nazwa lokalu</label>
                <Field
                  type="text"
                  name="restaurantName"
                  validate={this.validateRestaurantName}
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
                  validate={this.validateRestaurantEmail}
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
                  validate={this.validateRestaurantPhoneNumber}
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
                  validate={this.validateRestaurantStreet}
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
                  validate={this.validateRestaurantBuildingNumber}
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
                  validate={this.validateRestaurantCity}
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
