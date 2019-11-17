import React from "react";
import styles from "./Info.module.scss";
import { connect } from "react-redux";

class Info extends React.Component {
  render() {
    const { haveEatingPlace } = this.props;
    let restaurantPhoneNumber;
    let restaurantEmail;
    let tuesdayOpenHour;
    let tuesdayCloseHour;
    let wednesdayOpenHour;
    let wednesdayCloseHour;
    let thursdayOpenHour;
    let thursdayCloseHour;
    let fridayOpenHour;
    let fridayCloseHour;
    let saturdayOpenHour;
    let saturdayCloseHour;
    let sundayOpenHour;
    let sundayCloseHour;

    let mondayOpenHour;
    let mondayCloseHour;
    if (haveEatingPlace) {
      restaurantPhoneNumber = haveEatingPlace.restaurantPhoneNumber;
      restaurantEmail = haveEatingPlace.restaurantEmail;
      mondayOpenHour = haveEatingPlace.mondayOpenHour;
      mondayCloseHour = haveEatingPlace.mondayCloseHour;
      tuesdayOpenHour = haveEatingPlace.tuesdayOpenHour;
      tuesdayCloseHour = haveEatingPlace.tuesdayCloseHour;
      wednesdayOpenHour = haveEatingPlace.wednesdayOpenHour;
      wednesdayCloseHour = haveEatingPlace.wednesdayCloseHour;
      thursdayOpenHour = haveEatingPlace.thursdayOpenHour;
      thursdayCloseHour = haveEatingPlace.thursdayCloseHour;
      fridayOpenHour = haveEatingPlace.fridayOpenHour;
      fridayCloseHour = haveEatingPlace.fridayCloseHour;
      saturdayOpenHour = haveEatingPlace.saturdayOpenHour;
      saturdayCloseHour = haveEatingPlace.saturdayCloseHour;
      sundayOpenHour = haveEatingPlace.sundayOpenHour;
      sundayCloseHour = haveEatingPlace.sundayCloseHour;
    }
    console.log(haveEatingPlace);
    return (
      <div className={styles.infoWrapper}>
        <div className={styles.infoContent}>
          <div className={styles.title}>Kontakt</div>
          <div className={styles.content}>
            numer telefonu: {restaurantPhoneNumber}
          </div>
          <div className={styles.content}>email: {restaurantEmail}</div>
          <div className={styles.title}>Kuchnia</div>
          <div className={styles.content}>kuchnia1, kuchnia2, kuchnia3</div>
          <div className={styles.title}>Dania</div>
          <div className={styles.content}>danie1, danie2, danie3</div>
          <div className={styles.title}>Udogodnienia</div>
          <div className={styles.content}>
            udogodnienie1, udogodnienie2, udogodnienie3
          </div>
          <div className={styles.title}>Godziny otwarcia</div>
          <div className={styles.timeWrapper}>
            <div className={styles.timeDay}>
              Poniedziałek {mondayOpenHour}-{mondayCloseHour}
            </div>
            <div className={styles.timeDay}>
              Wtorek {tuesdayOpenHour}-{tuesdayCloseHour}
            </div>
            <div className={styles.timeDay}>
              Środa {wednesdayOpenHour}-{wednesdayCloseHour}
            </div>
            <div className={styles.timeDay}>
              Czwartek {thursdayOpenHour}-{thursdayCloseHour}
            </div>
            <div className={styles.timeDay}>
              Piątek {fridayOpenHour}-{fridayCloseHour}
            </div>
            <div className={styles.timeDay}>
              Sobota {saturdayOpenHour}-{saturdayCloseHour}
            </div>
            <div className={styles.timeDay}>
              Niedziela {sundayOpenHour}-{saturdayCloseHour}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    haveEatingPlace: state.auth.haveEatingPlace
  };
};

export default connect(mapStateToProps)(Info);
