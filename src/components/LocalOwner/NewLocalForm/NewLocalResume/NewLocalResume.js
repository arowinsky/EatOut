import React from "react";
import styles from "../NewLocalForm.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "./../../../Button/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MealName from "../NewLocalCategory/MealName/MealName";

class NewLocalResume extends React.Component {
  state = {
    mealCatName: [
      {
        id: 1,
        name: "pizza",
        value: "pizza"
      },
      {
        id: 2,
        name: "makaron",
        value: "makaron"
      },
      {
        id: 3,
        name: "burger",
        value: "burger"
      },
      {
        id: 4,
        name: "sushi",
        value: "sushi"
      },
      {
        id: 5,
        name: "kebab",
        value: "kebab"
      },
      {
        id: 6,
        name: "zapiekanki",
        value: "zapiekanki"
      },
      {
        id: 7,
        name: "ramen",
        value: "ramen"
      },
      {
        id: 8,
        name: "stek",
        value: "stek"
      },
      {
        id: 9,
        name: "obiad",
        value: "obiad"
      },
      {
        id: 10,
        name: "kawa",
        value: "kawa"
      },
      {
        id: 11,
        name: "ciasto",
        value: "ciasto"
      },
      {
        id: 12,
        name: "alkohol",
        value: "alkohol"
      }
    ],
    cuisineCat: [
      {
        id: 200,
        name: "arabska",
        value: "arabska"
      },
      {
        id: 201,
        name: "amerykańska",
        value: "amerykańska"
      },
      {
        id: 202,
        name: "włoska",
        value: "włoska"
      },
      {
        id: 203,
        name: "europejska",
        value: "europejska"
      },
      {
        id: 204,
        name: "domowa",
        value: "domowa"
      },
      {
        id: 205,
        name: "polska",
        value: "polska"
      },
      {
        id: 206,
        name: "francuska",
        value: "francuska"
      },
      {
        id: 207,
        name: "azjatycka",
        value: "azjatycka"
      },
      {
        id: 208,
        name: "wege/wegan",
        value: "wege_wegan"
      },
      {
        id: 209,
        name: "meksykańska",
        value: "meksykańska"
      },
      {
        id: 210,
        name: "dietetyczna",
        value: "dietetyczna"
      }
    ],
    typeCat: [
      {
        id: 400,
        name: "śniadanie",
        value: "śniadanie"
      },
      {
        id: 401,
        name: "lunch",
        value: "lunch"
      },
      {
        id: 402,
        name: "randka",
        value: "randka"
      },
      {
        id: 403,
        name: "pub",
        value: "pub"
      }
    ],
    comfCat: [
      {
        id: 1100,
        name: "wifi",
        value: "wifi"
      },
      {
        id: 1101,
        name: "transmisja meczy",
        value: "transmisja_meczy"
      },
      {
        id: 1102,
        name: "ogródek",
        value: "ogródek"
      },
      {
        id: 1103,
        name: "przystosowane dla osób niepełnosprawnych",
        value: "przystosowane_dla_osób_niepełnosprawnych"
      },
      {
        id: 1104,
        name: "pokój dla matki z dzieckiem",
        value: "pokój_dla_matki_z_dzieckiem"
      },
      {
        id: 1105,
        name: "animal friendly",
        value: "animal_friendly"
      },
      {
        id: 1106,
        name: "insta friendly",
        value: "insta_friendly"
      },
      {
        id: 1107,
        name: "język migowy",
        value: "język_migowy"
      }
    ]
  };
  render() {
    const setFirst = localStorage.getItem("setFirst");
    const setSecond = localStorage.getItem("setSecond");
    const firstFormData = JSON.parse(setFirst);
    const secondFormData = JSON.parse(setSecond);
    console.log(firstFormData);
    console.log(secondFormData);

    return (
      <div className={styles.restaurantFormWrapper}>
        <div className={styles.formTitle}>Potwierdź dane:</div>
        <Formik
          initialValues={{
            restaurantName: firstFormData.restaurantName,
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
            sundayCloseHour: "",
            alkohol: false,
            amerykańska: false,
            animal_friendly: false,
            arabska: false,
            azjatycka: false,
            burger: false,
            ciasto: false,
            dietetyczna: false,
            domowa: false,
            europejska: false,
            francuska: false,
            insta_friendly: false,
            język_migowy: false,
            kawa: false,
            kebab: false,
            lunch: false,
            makaron: false,
            meksykańska: false,
            obiad: false,
            ogródek: false,
            pizza: false,
            pokój_dla_matki_z_dzieckiem: false,
            polska: false,
            przystosowane_dla_osób_niepełnosprawnych: false,
            pub: false,
            ramen: false,
            randka: false,
            stek: false,
            sushi: false,
            transmisja_meczy: false,
            wege_wegan: false,
            wifi: false,
            włoska: false,
            zapiekanki: false,
            śniadanie: false
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
          onSubmit={values => {}}
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
                <Field
                  type="file"
                  name="restaurantAvatar"
                  className={styles.inputFile}
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
                <label htmlFor="restaurantMenu">Wybierz zdjęcie banerowe</label>
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
              <div className={styles.formTitle}>Danie</div>
              <MealName mealCatName={this.state.mealCatName} />
              <div className={styles.formTitle}>Kuchnia</div>
              <MealName mealCatName={this.state.cuisineCat} />
              <div className={styles.formTitle}>Okazja</div>
              <MealName mealCatName={this.state.typeCat} />
              <div className={styles.formTitle}>Udogodnienia</div>
              <MealName mealCatName={this.state.comfCat} />

              <Button second type="submit" className={styles.button}>
                Załóz profil lokalu
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewLocalResume);
