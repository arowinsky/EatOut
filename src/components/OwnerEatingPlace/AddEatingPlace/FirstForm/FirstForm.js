import React from "react";
import styles from "../AddEatingPlace.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../Button/Button";
import { Redirect } from "react-router-dom";

class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noErrorsValidations: null,
      errorRestaurantName: "",
      errorRestaurantEmail: "",
      errorRestaurantStreet: "",
      errorRestaurantBuildingNumber: "",
      errorRestaurantCity: "",
      errorRestaurantPhoneNumber: ""
    };
  }

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
  validateOpenCloseHoursForDay = value => {
    let error;
    if (!value) {
      error = "To pole jest wymagane";
      return error;
    }
  };

  render() {
    let startCreatingNewEatingPlace;
    if (this.props.location.state) {
      startCreatingNewEatingPlace = this.props.location.state
        .startCreatingNewEatingPlace;
    }
    if (!startCreatingNewEatingPlace) {
      return <Redirect to="/" />;
    }
    const { noErrorsValidations } = this.state;
    console.log(noErrorsValidations);
    if (noErrorsValidations) {
      return (
        <Redirect
          to={{
            pathname: "/add-eating-place-second-form",
            state: {
              firstFormIsComplete: noErrorsValidations
            }
          }}
        />
      );
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
            if (errors) {
              this.setState({ noErrorsValidations: true });
              localStorage.setItem("setFirst", JSON.stringify(values));
            }
          }}
        >
          {() => (
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
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="mondayCloseHour"
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="mondayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                  <ErrorMessage
                    name="mondayCloseHour"
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
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />

                  <Field
                    type="time"
                    name="tuesdayCloseHour"
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="tuesdayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                  <ErrorMessage
                    name="tuesdayCloseHour"
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
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="wednesdayCloseHour"
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="wednesdayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                  <ErrorMessage
                    name="wednesdayCloseHour"
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
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="thursdayCloseHour"
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="thursdayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                  <ErrorMessage
                    name="thursdayCloseHour"
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
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="fridayCloseHour"
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="fridayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                  <ErrorMessage
                    name="fridayCloseHour"
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
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="saturdayCloseHour"
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="saturdayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                  <ErrorMessage
                    name="saturdayCloseHour"
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
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <Field
                    type="time"
                    name="sundayCloseHour"
                    validate={this.validateOpenCloseHoursForDay}
                    className={styles.inputTime}
                  />
                  <ErrorMessage
                    name="sundayOpenHour"
                    component="div"
                    className={styles.timeError}
                  />
                  <ErrorMessage
                    name="sundayCloseHour"
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
export default FirstForm;
