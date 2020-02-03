import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import { Redirect } from "react-router-dom";
class WaitingForDataPlace extends React.Component {
  render() {
    const { getDataSingleEatingPlace } = this.props;
    let { singleEatingPlace } = this.props;
    const { placeId } = this.props.location.state;
    let z = localStorage.getItem("z");
    getDataSingleEatingPlace(z, placeId);
    if (singleEatingPlace) {
      return (
        <Redirect
          to={{
            pathname: "/eating-place-profile",
            state: {
              eatingPlace: singleEatingPlace
            }
          }}
        />
      );
    }
    return <div>Loading...</div>;
  }
}

const mapStateToProps = state => {
  return {
    singleEatingPlace: state.eatingPlaceProfile.singleEatingPlace
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDataSingleEatingPlace: (z, placeId) =>
      dispatch(actions.getDataSingleEatingPlace(z, placeId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingForDataPlace);
