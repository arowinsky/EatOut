import React from "react";
import EatingPlaceHeader from "./EatingPlaceHeader/EatingPlaceHeader";
import EatingPlaceBody from "./EatingPlaceBody/RestaurantBody";

const EatingPlaceProfile = props => {
  return (
    <div>
      <EatingPlaceHeader />
      <EatingPlaceBody />
    </div>
  );
};

export default EatingPlaceProfile;
