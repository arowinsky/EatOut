import React from "react";
import styles from "./ResultSearch.module.scss";
import EatingPlaceProfileCard from "../../OwnerEatingPlace/EatingPlaceProfile/EatingPlaceProfileCard/EatingPlaceProfileCard";
import { connect } from "react-redux";
const Stage = props => {
  const { searchedEatingPlaces } = props;
  return (
    <div className={styles.wrapper}>
      <ul className={styles.cards}>
        <li className={styles.cards_item}>
          {/* <EatingPlaceProfileCard eatingPlaces={searchedEatingPlaces} /> */}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchedEatingPlaces: state.nameSearchEatingPlaces.searchedEatingPlaces
  };
};

export default connect(mapStateToProps)(Stage);
