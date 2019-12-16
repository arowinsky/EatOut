import React from "react";
import styles from "./Stage.module.scss";
import Search from "../Search/Search";
import EatingPlaceProfileCard from "../../OwnerEatingPlace/EatingPlaceProfile/EatingPlaceProfileCard/EatingPlaceProfileCard";
import { connect } from "react-redux";
const Stage = props => {
  const { searchedEatingPlaces } = props;
  return (
    <div className={styles.stage}>
      <div className={styles.stage_element}>
        <div className={styles.stage_logo}>
          <span className={styles.stage_yellow}>Eat</span>
          <span className={styles.stage_red}>Out</span>
        </div>
        <Search />
        <EatingPlaceProfileCard eatingPlaces={searchedEatingPlaces} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchedEatingPlaces: state.nameSearchEatingPlaces.searchedEatingPlaces
  };
};

export default connect(mapStateToProps)(Stage);
