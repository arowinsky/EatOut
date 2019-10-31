import React from "react";
import styles from "../NewLocalForm.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "./../../../Button/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MealName from "../NewLocalCategory/MealName/MealName";
import * as actions from "../../../../store/actions/index";

class NewLocalResume extends React.Component {
  constructor(props) {
    super(props);
    const setFirst = localStorage.getItem("setFirst");
    const setSecond = localStorage.getItem("setSecond");
    const firstFormData = JSON.parse(setFirst);
    const secondFormData = JSON.parse(setSecond);

    this.state = {
      mealCatName: [
        {
          id: 1,
          name: "pizza",
          value: secondFormData.pizza
        },
        {
          id: 2,
          name: "makaron",
          value: secondFormData.makaron
        },
        {
          id: 3,
          name: "burger",
          value: secondFormData.burger
        },
        {
          id: 4,
          name: "sushi",
          value: secondFormData.sushi
        },
        {
          id: 5,
          name: "kebab",
          value: secondFormData.kebab
        },
        {
          id: 6,
          name: "zapiekanki",
          value: secondFormData.zapiekanki
        },
        {
          id: 7,
          name: "ramen",
          value: secondFormData.ramen
        },
        {
          id: 8,
          name: "stek",
          value: secondFormData.stek
        },
        {
          id: 9,
          name: "obiad",
          value: secondFormData.obiad
        },
        {
          id: 10,
          name: "kawa",
          value: secondFormData.kawa
        },
        {
          id: 11,
          name: "ciasto",
          value: secondFormData.ciasto
        },
        {
          id: 12,
          name: "alkohol",
          value: secondFormData.alkohol
        }
      ],
      cuisineCat: [
        {
          id: 200,
          name: "arabska",
          value: secondFormData.arabska
        },
        {
          id: 201,
          name: "amerykańska",
          value: secondFormData.amerykańska
        },
        {
          id: 202,
          name: "włoska",
          value: secondFormData.włoska
        },
        {
          id: 203,
          name: "europejska",
          value: secondFormData.europejska
        },
        {
          id: 204,
          name: "domowa",
          value: secondFormData.domowa
        },
        {
          id: 205,
          name: "polska",
          value: secondFormData.polska
        },
        {
          id: 206,
          name: "francuska",
          value: secondFormData.francuska
        },
        {
          id: 207,
          name: "azjatycka",
          value: secondFormData.azjatycka
        },
        {
          id: 208,
          name: "wege/wegan",
          value: secondFormData.wege_wegan
        },
        {
          id: 209,
          name: "meksykańska",
          value: secondFormData.meksykańska
        },
        {
          id: 210,
          name: "dietetyczna",
          value: secondFormData.dietetyczna
        }
      ],
      typeCat: [
        {
          id: 400,
          name: "śniadanie",
          value: secondFormData.śniadanie
        },
        {
          id: 401,
          name: "lunch",
          value: secondFormData.lunch
        },
        {
          id: 402,
          name: "randka",
          value: secondFormData.randka
        },
        {
          id: 403,
          name: "pub",
          value: secondFormData.pub
        }
      ],
      comfCat: [
        {
          id: 1100,
          name: "wifi",
          value: secondFormData.wifi
        },
        {
          id: 1101,
          name: "transmisja meczy",
          value: secondFormData.transmisja_meczy
        },
        {
          id: 1102,
          name: "ogródek",
          value: secondFormData.ogródek
        },
        {
          id: 1103,
          name: "przystosowane dla osób niepełnosprawnych",
          value: secondFormData.przystosowane_dla_osób_niepełnosprawnych
        },
        {
          id: 1104,
          name: "pokój dla matki z dzieckiem",
          value: secondFormData.pokój_dla_matki_z_dzieckiem
        },
        {
          id: 1105,
          name: "animal friendly",
          value: secondFormData.animal_friendly
        },
        {
          id: 1106,
          name: "insta friendly",
          value: secondFormData.insta_friendly
        },
        {
          id: 1107,
          name: "język migowy",
          value: secondFormData.język_migowy
        }
      ]
    };
  }
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
            restaurantStreet: firstFormData.restaurantStreet,
            restaurantAvatar: firstFormData.restaurantAvatar,
            restaurantHeader: firstFormData.restaurantHeader,
            restaurantMenu: firstFormData.restaurantMenu,
            mondayOpenHour: firstFormData.mondayCloseHour,
            mondayCloseHour: firstFormData.mondayCloseHour,
            tuesdayOpenHour: firstFormData.tuesdayOpenHour,
            tuesdayCloseHour: firstFormData.tuesdayCloseHour,
            wednesdayOpenHour: firstFormData.wednesdayOpenHour,
            wednesdayCloseHour: firstFormData.wednesdayCloseHour,
            thursdayOpenHour: firstFormData.thursdayOpenHour,
            thursdayCloseHour: firstFormData.thursdayCloseHour,
            fridayOpenHour: firstFormData.fridayOpenHour,
            fridayCloseHour: firstFormData.fridayCloseHour,
            saturdayOpenHour: firstFormData.saturdayOpenHour,
            saturdayCloseHour: firstFormData.saturdayCloseHour,
            sundayOpenHour: firstFormData.sundayOpenHour,
            sundayCloseHour: firstFormData.sundayCloseHour,
            alkohol: true,
            amerykańska: secondFormData.amerykańska,
            animal_friendly: secondFormData.animal_friendly,
            arabska: secondFormData.arabska,
            azjatycka: secondFormData.azjatycka,
            burger: secondFormData.burger,
            ciasto: secondFormData.ciasto,
            dietetyczna: secondFormData.dietetyczna,
            domowa: secondFormData.domowa,
            europejska: secondFormData.europejska,
            francuska: secondFormData.francuska,
            insta_friendly: secondFormData.insta_friendly,
            język_migowy: secondFormData.język_migowy,
            kawa: secondFormData.kawa,
            kebab: secondFormData.kebab,
            lunch: secondFormData.lunch,
            makaron: secondFormData.makaron,
            meksykańska: secondFormData.meksykańska,
            obiad: secondFormData.obiad,
            ogródek: secondFormData.ogródek,
            pizza: secondFormData.pizza,
            // pokój_dla_matki_z_dzieckiem:
            //   secondFormData.pokój_dla_matki_z_dzieckiem,
            polska: secondFormData.polska,
            // przystosowane_dla_osób_niepełnosprawnych:
            //   secondFormData.przystosowane_dla_osób_niepełnosprawnych,
            pub: secondFormData.pub,
            ramen: secondFormData.ramen,
            randka: secondFormData.randka,
            stek: secondFormData.stek,
            sushi: secondFormData.sushi,
            transmisja_meczy: secondFormData.transmisja_meczy,
            wege_wegan: secondFormData.wege_wegan,
            wifi: secondFormData.wifi,
            włoska: secondFormData.włoska,
            zapiekanki: secondFormData.zapiekanki,
            śniadanie: secondFormData.śniadanie
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
          onSubmit={initialValues => {
            this.props.addNewLocal(initialValues);
          }}
        >
          {({ isSubmitting, initialValues }) => (
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
              {/* <div className={styles.inputElement}>
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
              </div> */}
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

              {/* <div>
                <div>
                  <div>
                    <label>dupa</label>
                    <Field
                      type="checkbox"
                      checked={initialValues.map(ziomek => {
                        <p>{this.props.ziomek}</p>;
                      })}
                    />
                  </div>
                </div>
              </div> */}

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
  return {
    addNewLocal: values => dispatch(actions.addNewLocal(values))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewLocalResume);
