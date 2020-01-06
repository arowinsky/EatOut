import React from "react";
import styles from "./ResultSearch.module.scss";
import EatingPlaceProfileCard from "../../OwnerEatingPlace/EatingPlaceProfile/EatingPlaceProfileCard/EatingPlaceProfileCard";
import { connect } from "react-redux";
const Stage = props => {
  const { searchedEatingPlaces } = props;
  console.log(searchedEatingPlaces);
  return (
    <div className={styles.grid}>
      {searchedEatingPlaces
        ? searchedEatingPlaces.map(eatingPlaces => (
            <EatingPlaceProfileCard
              cardType="searchedPlace"
              eatingPlaces={eatingPlaces}
            />
          ))
        : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchedEatingPlaces: state.nameSearchEatingPlaces.searchedEatingPlaces
  };
};

export default connect(mapStateToProps)(Stage);
