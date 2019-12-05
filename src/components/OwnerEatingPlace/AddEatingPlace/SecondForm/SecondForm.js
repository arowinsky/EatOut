import React from "react";
import styles from "../AddEatingPlace.module.scss";
import MealName from "./MealName/MealName";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import Button from "../../../Button/Button";
import { Redirect } from "react-router-dom";

class NewLocalCategory extends React.Component {
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
    ],
    submited: null
  };
  render() {
    const { submited } = this.state;
    const setFirst = localStorage.getItem("setFirst");
    if (!setFirst) {
      return <Redirect to="/" />;
    }
    if (submited) {
      return <Redirect to="/add-eating-place-summary-form" />;
    }
    return (
      <div className={styles.restaurantFormWrapper}>
        <Formik
          initialValues={{
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
            return errors;
          }}
          onSubmit={values => {
            localStorage.setItem("setSecond", JSON.stringify(values));
            this.setState({ submited: true });
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.restaurantForm}>
              <div className={styles.formTitle}>Danie</div>
              <MealName mealCatName={this.state.mealCatName} />
              <div className={styles.formTitle}>Kuchnia</div>
              <MealName mealCatName={this.state.cuisineCat} />
              <div className={styles.formTitle}>Okazja</div>
              <MealName mealCatName={this.state.typeCat} />
              <div className={styles.formTitle}>Udogodnienia</div>
              <MealName mealCatName={this.state.comfCat} />
              <Button second type="submit" className={styles.button}>
                Dalej
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
export default NewLocalCategory;
