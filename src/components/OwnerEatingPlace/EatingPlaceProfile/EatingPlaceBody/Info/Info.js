import React from "react";
import styles from "./Info.module.scss";
class Info extends React.Component {
  render() {
    const { eatingPlace } = this.props;
    console.log(eatingPlace);
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
    //facilities
    let animal_friendly;
    let insta_friendly;
    let jezyk_migowy;
    let ogrodek;
    let pokoj_dla_matki_z_dzieckiem;
    let przystosowanie_dla_osob_niepelnosprawnych;
    let transmija_meczy;
    let wifi;
    if (eatingPlace) {
      restaurantPhoneNumber = eatingPlace.info.restaurantPhoneNumber;
      restaurantEmail = eatingPlace.info.restaurantEmail;
      mondayOpenHour = eatingPlace.info.mondayOpenHour;
      mondayCloseHour = eatingPlace.info.mondayCloseHour;
      tuesdayOpenHour = eatingPlace.info.tuesdayOpenHour;
      tuesdayCloseHour = eatingPlace.info.tuesdayCloseHour;
      wednesdayOpenHour = eatingPlace.info.wednesdayOpenHour;
      wednesdayCloseHour = eatingPlace.info.wednesdayCloseHour;
      thursdayOpenHour = eatingPlace.info.thursdayOpenHour;
      thursdayCloseHour = eatingPlace.info.thursdayCloseHour;
      fridayOpenHour = eatingPlace.info.fridayOpenHour;
      fridayCloseHour = eatingPlace.info.fridayCloseHour;
      saturdayOpenHour = eatingPlace.info.saturdayOpenHour;
      saturdayCloseHour = eatingPlace.info.saturdayCloseHour;
      sundayOpenHour = eatingPlace.info.sundayOpenHour;
      sundayCloseHour = eatingPlace.info.sundayCloseHour;
      alkohol = eatingPlace.dishes.alkohol;
      burger = eatingPlace.dishes.burger;
      ciastko = eatingPlace.dishes.ciastko;
      kawa = eatingPlace.dishes.kawa;
      kebab = eatingPlace.dishes.kebab;
      makaron = eatingPlace.dishes.makaron;
      obiad = eatingPlace.dishes.obiad;
      pizza = eatingPlace.dishes.pizza;
      ramen = eatingPlace.dishes.ramen;
      stek = eatingPlace.dishes.stek;
      sushi = eatingPlace.dishes.sushi;
      zapieknaki = eatingPlace.dishes.zapieknaki;
      amerykanska = eatingPlace.kitchen.amerykanska;
      arabska = eatingPlace.kitchen.arabska;
      azjatycka = eatingPlace.kitchen.azjatycka;
      dietetyczna = eatingPlace.kitchen.dietetyczna;
      domowa = eatingPlace.kitchen.domowa;
      europejska = eatingPlace.kitchen.europejska;
      francuska = eatingPlace.kitchen.francuska;
      meksykanska = eatingPlace.kitchen.meksykanska;
      polska = eatingPlace.kitchen.polska;
      wege_wegan = eatingPlace.kitchen.wege_wegan;
      lunch = eatingPlace.opportunity.lunch;
      pub = eatingPlace.opportunity.pub;
      randka = eatingPlace.opportunity.randka;
      sniadanie = eatingPlace.opportunity.sniadanie;
      animal_friendly = eatingPlace.facilities.animal_friendly;
      insta_friendly = eatingPlace.facilities.insta_friendly;
      jezyk_migowy = eatingPlace.facilities.jezyk_migowy;
      ogrodek = eatingPlace.facilities.ogrodek;
      pokoj_dla_matki_z_dzieckiem =
        eatingPlace.facilities.pokoj_dla_matki_z_dzieckiem;
      przystosowanie_dla_osob_niepelnosprawnych =
        eatingPlace.facilities.przystosowanie_dla_osob_niepelnosprawnych;
      transmija_meczy = eatingPlace.facilities.transmija_meczy;
      wifi = eatingPlace.facilities.wifi;
    }
    console.log(eatingPlace);
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
            {polska ? " polska," : null} {wege_wegan ? " wege/wegan," : null}
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
          <div className={styles.title}>Udogodnienia</div>
          <div className={styles.content}>
            {animal_friendly ? " animal friendly," : null}
            {insta_friendly ? " insta friendly," : null}
            {jezyk_migowy ? " jezyk migowy," : null}
            {ogrodek ? " ogrodek," : null}
            {pokoj_dla_matki_z_dzieckiem
              ? " pokoj dla matki z dzieckiem,"
              : null}
            {przystosowanie_dla_osob_niepelnosprawnych
              ? " przystosowanie dla osob niepelnosprawnych,"
              : null}
            {transmija_meczy ? " transmija meczy," : null}
            {wifi ? " wifi," : null}
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

export default Info;
