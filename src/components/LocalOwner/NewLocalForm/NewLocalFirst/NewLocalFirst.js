import React from "react";
import styles from "../NewLocalForm.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../Button/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../../store/actions/index";
import storage from "../../../../configs/firebaseConfig";

class NewLocalFirst extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = e => {
    const { image } = this.state;
    console.log(image);
    const uploadTask = storage.ref(`image/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      }
      // ,
      // () => {
      //   storage
      //     .ref("images")
      //     .child(image.name)
      //     .getDownloadURL()
      //     .then(url => {
      //       console.log(url);
      //     });
      // }
    );
  };
  render() {
    let test = false;
    let setFirst = false;
    console.log(setFirst);
    const { set_first } = this.props;
    if (set_first === null) {
      test = true;
      this.props.test(test);
      console.log(test);
    }
    console.log(this.props.set_first);
    return (
      <div className={styles.restaurantFormWrapper}>
        <div className={styles.formTitle}>Dodaj lokal</div>
        <Formik
          initialValues={{
            restaurantName: "",
            restaurantStreet: "",
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
          validate={values => {
            let errors = {};
            if (!values.restaurantName) {
              errors.restaurantName = "Pole wymagane";
            }
            if (!values.restaurantStreet) {
              errors.restaurantStreet = "Pole wymagane";
            }
            if (!values.restaurantAvatar) {
              errors.restaurantAvatar = "Pole wymagane";
            }
            if (!values.restaurantHeader) {
              errors.restaurantHeader = "Pole wymagane";
            }
            if (!values.restaurantMenu) {
              errors.restaurantMenu = "Pole wymagane";
            }
            if (!values.mondayOpenHour || !values.mondayCloseHour) {
              errors.mondayOpenHour = "Pole wymagane";
            }
            if (!values.tuesdayOpenHour || !values.tuesdayOpenHour) {
              errors.tuesdayOpenHour = "Pole wymagane";
            }
            if (!values.wednesdayOpenHour || !values.wednesdayCloseHour) {
              errors.wednesdayOpenHour = "Pole wymagane";
            }
            if (!values.thursdayOpenHour || !values.thursdayCloseHour) {
              errors.thursdayOpenHour = "Pole wymagane";
            }
            if (!values.fridayOpenHour || !values.fridayCloseHour) {
              errors.fridayOpenHour = "Pole wymagane";
            }
            if (!values.saturdayOpenHour || !values.saturdayCloseHour) {
              errors.saturdayOpenHour = "Pole wymagane";
            }
            if (!values.sundayOpenHour || !values.sundayCloseHour) {
              errors.sundayOpenHour = "Pole wymagane";
            }
            return errors;
          }}
          onSubmit={values => {
            // if (values) {
            //   setFirst = Object.assign({}, [
            //     values.restaurantName,
            //     values.restaurantStreet,
            //     values.restaurantAvatar,
            //     values.restaurantHeader,
            //     values.restaurantMenu,
            //     values.mondayCloseHour,
            //     values.mondayOpenHour,
            //     values.tuesdayCloseHour,
            //     values.tuesdayOpenHour,
            //     values.wednesdayCloseHour,
            //     values.wednesdayOpenHour,
            //     values.thursdayCloseHour,
            //     values.thursdayOpenHour,
            //     values.fridayCloseHour,
            //     values.fridayOpenHour,
            //     values.saturdayCloseHour,
            //     values.saturdayOpenHour,
            //     values.sundayCloseHour,
            //     values.sundayOpenHour
            //   ]);
            //   console.log(values);
            //   localStorage.setItem("setFirst", JSON.stringify(setFirst));
            // }
            localStorage.setItem("setFirst", JSON.stringify(values));
            console.log(values.restaurantAvatar.name);
            console.log(JSON.stringify(values));
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
                <label htmlFor="restaurantStreet">Adres lokalu</label>
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
                <label htmlFor="restaurantAvatar">
                  Wybierz zdjęcie profilowe
                </label>
                <input
                  type="file"
                  name="restaurantAvatar"
                  className={styles.inputFile}
                  onChange={this.handleChange}
                />
                <ErrorMessage name="restaurantAvatar" component="div" />
              </div>
              <br />
              <br />
              <div className={styles.inputElement}>
                <label htmlFor="restaurantHeader">
                  Wybierz zdjęcie banerowe
                </label>
                <Field
                  type="file"
                  name="restaurantHeader"
                  className={styles.inputFile}
                />
                <ErrorMessage name="restaurantHeader" component="div" />
              </div>
              <br />
              <br />
              <div className={styles.inputElement}>
                <label htmlFor="restaurantMenu">Wybierz zdjęcie menu</label>
                <Field
                  type="file"
                  name="restaurantMenu"
                  className={styles.inputFile}
                />
                <ErrorMessage name="restaurantMenu" component="div" />
              </div>
              <br />
              <br />
              <h3>Godziny otwarcia lokalu</h3>
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
                disabled={isSubmitting}
                onClick={this.handleUpload}
              >
                {/* {isSubmitting ? (
                  <Link to="/add-new-local-2" className={styles.button}>
                    Dalej
                  </Link>
                ) : (
                  "Potwierdź"
                )} */}
                {
                  <Link to="/add-new-local-2" className={styles.button}>
                    Dalej
                  </Link>
                }
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default NewLocalFirst;
