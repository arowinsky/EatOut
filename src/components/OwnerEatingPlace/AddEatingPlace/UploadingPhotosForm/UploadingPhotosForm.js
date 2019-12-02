import React from "react";
import styles from "../AddEatingPlace.module.scss";
import { Formik, Form } from "formik";
import Button from "../../../Button/Button";

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
  render() {
    const { restaurantAvatar } = this.state;
    const { idAddedPlace, idOwnerAddedEatingPlace } = this.props.location.state;
    let error;
    if (!restaurantAvatar) {
      error = "Podaj nazwę lokalu";
      return error;
    }
    return (
      <div className={styles.restaurantFormWrapper}>
        <div className={styles.formTitle}>Dodaj lokal</div>
        <Formik
          initialValues={{}}
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
              </div>

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
export default UploadingPhotosForm;
