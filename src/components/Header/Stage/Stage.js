import React from "react";
import styles from "./Stage.module.scss";
import Search from "../Search/Search";
import ResultSearchTemplate from "../../../templates/ResultSearchTemplate";
import { connect } from "react-redux";
import EatingPlaceProfileCard from "../../OwnerEatingPlace/EatingPlaceProfile/EatingPlaceProfileCard/EatingPlaceProfileCard";
const Stage = searchedEatingPlaces => {
  return (
    <div className={styles.stage}>
      <div className={styles.stage_element}>
        <div className={styles.stage_logo}>
          <span className={styles.stage_yellow}>Eat</span>
          <span className={styles.stage_red}>Out</span>
        </div>
        <Search />
      </div>
      <ResultSearchTemplate>
        {searchedEatingPlaces.map(item => (
          <EatingPlaceProfileCard />
        ))}
      </ResultSearchTemplate>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    searchedEatingPlaces: state.nameSearchEatingPlaces.searchedEatingPlaces
  };
};
export default connect(null, mapStateToProps)(Stage);
