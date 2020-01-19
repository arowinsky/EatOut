import React from "react";
import { connect } from "react-redux";
import * as actions from "../../../../store/actions/index";
import { Redirect } from "react-router-dom";
class WaitingForDataPlace extends React.Component {
  render() {
    const { getDataEatingPlace } = this.props;
    let { singleEatingPlace } = this.props;
    let { placeId, eatingPlace } = this.props.location.state;
    // console.log("first", singleEatingPlace);
    // if (!eatingPlace) {
    //   singleEatingPlace = eatingPlace;
    //   eatingPlace = true;
    // }
    // console.log("after", singleEatingPlace);
    // console.log("TCL: WaitingForDataPlace -> render -> placeId", placeId);
    // console.log("Id Lokalu:", placeId);
    getDataEatingPlace(placeId);
    console.log("single", singleEatingPlace);
    if (singleEatingPlace) {
      console.log("chce przejsc");
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
    // let sendedPlaceId = null;
    // console.log(sendedPlaceId);

    // console.log(sendedPlaceId);
    // sended = true;

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
    getDataEatingPlace: placeId => dispatch(actions.getDataEatingPlace(placeId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WaitingForDataPlace);
