import React from "react";
import FollowingPlaces from "../../components/List/FollowingPlaces/FollowingPlaces";
import styles from "./FollowingPlacesView.module.scss";
class FollowingPlacesView extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>Obserwowane lokale gastronomiczne:</div>
        <FollowingPlaces />
      </div>
    );
  }
}

export default FollowingPlacesView;
