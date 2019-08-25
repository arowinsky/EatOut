import React from "react";
import styles from "./OwnerContent.module.scss";
import OwnerBox from "../OwnerBox/OwnerBox";
import taco from "../../../assets/body/taco.png";
import FoodImgComponent from "../../Footer/FooterImages/FoodImgComponent";
import { connect } from "react-redux";

class OwnerContent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      food: "taco"
    };
  }
  render() {
    // const profile = this.props;
    // console.log(profile);
    return (
      <div className={styles.owner_wrapper}>
        <div className={styles.salutation}>Witaj,</div>
        <div className={styles.owner_name}>{this.props.profile.userData}</div>
        <OwnerBox />
        <FoodImgComponent imagePath={taco} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(OwnerContent);
