import React from "react";
import GeneratorCodeForClient from "../../components/OwnerEatingPlace/EatingPlaceProfile/GeneratorCodeForClient/GeneratorCodeForClient";
class GeneratorCodeForClientView extends React.Component {
  render() {
    const { eatingPlace } = this.props.location.state;
    console.log(eatingPlace);
    return <GeneratorCodeForClient eatingPlace={eatingPlace} />;
  }
}

export default GeneratorCodeForClientView;
