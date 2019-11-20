import React from "react";
import styles from "./Info.module.scss";
import { connect } from "react-redux";

class Info extends React.Component {
  render() {
    const { haveEatingPlace } = this.props;
    console.log(haveEatingPlace);
    let restaurantPhoneNumber;
    let restaurantEmail;
    let mondayOpenHour;
    let mondayCloseHour;
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
    //dishes
    let alkohol;
    let burger;
    let ciastko;
    let kawa;
    let kebab;
    let makaron;
    let obiad;
    let pizza;
    let ramen;
    let stek;
    let sushi;
    let zapieknaki;
    //kitchen
    let amerykanska;
    let arabska;
    let azjatycka;
    let dietetyczna;
    let domowa;
    let europejska;
    let francuska;
    let meksykanska;
    let polska;
    let wege_wegan;
    //opportunity
    let lunch;
    let pub;
    let randka;
    let sniadanie;
    if (haveEatingPlace) {
      restaurantPhoneNumber = haveEatingPlace.info.restaurantPhoneNumber;
      restaurantEmail = haveEatingPlace.info.restaurantEmail;
      mondayOpenHour = haveEatingPlace.info.mondayOpenHour;
      mondayCloseHour = haveEatingPlace.info.mondayCloseHour;
      tuesdayOpenHour = haveEatingPlace.info.tuesdayOpenHour;
      tuesdayCloseHour = haveEatingPlace.info.tuesdayCloseHour;
      wednesdayOpenHour = haveEatingPlace.info.wednesdayOpenHour;
      wednesdayCloseHour = haveEatingPlace.info.wednesdayCloseHour;
      thursdayOpenHour = haveEatingPlace.info.thursdayOpenHour;
      thursdayCloseHour = haveEatingPlace.info.thursdayCloseHour;
      fridayOpenHour = haveEatingPlace.info.fridayOpenHour;
      fridayCloseHour = haveEatingPlace.info.fridayCloseHour;
      saturdayOpenHour = haveEatingPlace.info.saturdayOpenHour;
      saturdayCloseHour = haveEatingPlace.info.saturdayCloseHour;
      sundayOpenHour = haveEatingPlace.info.sundayOpenHour;
      sundayCloseHour = haveEatingPlace.info.sundayCloseHour;
      alkohol = haveEatingPlace.dishes.alkohol;
      burger = haveEatingPlace.dishes.burger;
      ciastko = haveEatingPlace.dishes.ciastko;
      kawa = haveEatingPlace.dishes.kawa;
      kebab = haveEatingPlace.dishes.kebab;
      makaron = haveEatingPlace.dishes.makaron;
      obiad = haveEatingPlace.dishes.obiad;
      pizza = haveEatingPlace.dishes.pizza;
      ramen = haveEatingPlace.dishes.ramen;
      stek = haveEatingPlace.dishes.stek;
      sushi = haveEatingPlace.dishes.sushi;
      zapieknaki = haveEatingPlace.dishes.zapieknaki;
      amerykanska = haveEatingPlace.kitchen.amerykanska;
      arabska = haveEatingPlace.kitchen.arabska;
      azjatycka = haveEatingPlace.kitchen.azjatycka;
      dietetyczna = haveEatingPlace.kitchen.dietetyczna;
      domowa = haveEatingPlace.kitchen.domowa;
      europejska = haveEatingPlace.kitchen.europejska;
      francuska = haveEatingPlace.kitchen.francuska;
      meksykanska = haveEatingPlace.kitchen.meksykanska;
      polska = haveEatingPlace.kitchen.polska;
      wege_wegan = haveEatingPlace.kitchen.wege_wegan;
      lunch = haveEatingPlace.opportunity.lunch;
      pub = haveEatingPlace.opportunity.pub;
      randka = haveEatingPlace.opportunity.randka;
      sniadanie = haveEatingPlace.opportunity.sniadanie;
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
          <div className={styles.content}>
            {amerykanska ? " amerykanska," : null}
            {arabska ? " arabska," : null}
            {azjatycka ? " azjatycka," : null}
            {dietetyczna ? " dietetyczna," : null}
            {domowa ? " domowa," : null} {europejska ? " europejska," : null}
            {francuska ? " francuska," : null}
            {meksykanska ? " meksykanska," : null}
            {polska ? " polska," : null} {wege_wegan ? " wege_wegan," : null}
          </div>
          <div className={styles.title}>Dania</div>
          <div className={styles.content}>
            {alkohol ? " alkohol," : null} {burger ? " burger," : null}
            {ciastko ? " ciastko," : null} {kawa ? " kawa," : null}
            {kebab ? " kebab," : null} {makaron ? " makaron," : null}
            {obiad ? " obiad," : null} {pizza ? " pizza," : null}
            {ramen ? " ramen," : null} {stek ? " stek," : null}
            {sushi ? " sushi," : null} {zapieknaki ? " zapiekanki," : null}
          </div>
          <div className={styles.title}>Okazje</div>
          <div className={styles.content}>
            {lunch ? " lunch," : null}
            {pub ? " pub," : null}
            {randka ? " randka," : null}
            {sniadanie ? " sniadanie," : null}
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
              Niedziela {sundayOpenHour}-{sundayCloseHour}
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
