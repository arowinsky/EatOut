import React from "react";
import styles from "../NewLocalForm.module.scss";
import MealName from "./MealName/MealName";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Formik, Form } from "formik";
import Button from "./../../../Button/Button";

class NewLocalCategory extends React.Component {
  state = {
    mealCatName: [
      {
        id: 1,
        name: "pizza"
      },
      {
        id: 2,
        name: "makaron"
      },
      {
        id: 3,
        name: "burger"
      },
      {
        id: 4,
        name: "sushi"
      },
      {
        id: 5,
        name: "kebab"
      },
      {
        id: 6,
        name: "zapiekanki"
      },
      {
        id: 7,
        name: "ramen"
      },
      {
        id: 8,
        name: "stek"
      },
      {
        id: 9,
        name: "obiad"
      },
      {
        id: 10,
        name: "kawa"
      },
      {
        id: 11,
        name: "ciasto"
      },
      {
        id: 12,
        name: "alkohol"
      }
    ],
    cuisineCat: [
      {
        id: 200,
        name: "arabska"
      },
      {
        id: 201,
        name: "amerykańska"
      },
      {
        id: 202,
        name: "włoska"
      },
      {
        id: 203,
        name: "europejska"
      },
      {
        id: 204,
        name: "domowa"
      },
      {
        id: 205,
        name: "polska"
      },
      {
        id: 206,
        name: "francuska"
      },
      {
        id: 207,
        name: "azjatycka"
      },
      {
        id: 208,
        name: "wege/wegan"
      },
      {
        id: 209,
        name: "meksykańska"
      },
      {
        id: 210,
        name: "dietetyczna"
      }
    ],
    typeCat: [
      {
        id: 400,
        name: "śniadanie"
      },
      {
        id: 401,
        name: "lunch"
      },
      {
        id: 402,
        name: "randka"
      },
      {
        id: 403,
        name: "pub"
      }
    ],
    comfCat: [
      {
        id: 1100,
        name: "wifi"
      },
      {
        id: 1101,
        name: "transmisja meczy"
      },
      {
        id: 1102,
        name: "ogródek"
      },
      {
        id: 1103,
        name: "przystosowane dla osób niepełnosprawnych"
      },
      {
        id: 1104,
        name: "pokój dla matki z dzieckiem"
      },
      {
        id: 1105,
        name: "animal friendly"
      },
      {
        id: 1106,
        name: "insta friendly"
      },
      {
        id: 1107,
        name: "język migowy"
      }
    ]
  };
  render() {
    return (
      <div className={styles.restaurantFormWrapper}>
        <Formik
          initialValues={{}}
          validate={values => {
            let errors = {};
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {}}
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
              <Button
                second
                type="submit"
                className={styles.button}
                disabled={isSubmitting}
              >
                <Link
                  to="/add-new-local-resume"
                  disabled={isSubmitting}
                  className={styles.button}
                >
                  Dalej
                </Link>
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
)(NewLocalCategory);
