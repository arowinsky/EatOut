import React from "react";
import styles from "./Menu.module.scss";
import image from "../../../../../assets/body/placeholder.png";
import { connect } from "react-redux";
class Menu extends React.Component {
  render() {
    const { restaurantMenu } = this.props;

    return (
      <div className={styles.menuWrapper}>
        <div className={styles.menuContent}>
          <img src={restaurantMenu ? restaurantMenu : image} alt="menu" />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    restaurantMenu: state.auth.restaurantMenu
  };
};
export default connect(mapStateToProps)(Menu);
