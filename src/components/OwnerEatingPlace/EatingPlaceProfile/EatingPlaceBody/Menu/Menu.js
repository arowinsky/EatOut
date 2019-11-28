import React from "react";
import styles from "./Menu.module.scss";
import image from "../../../../../assets/body/placeholder.png";
class Menu extends React.Component {
  render() {
    const { eatingPlace } = this.props;
    let menu;
    if (eatingPlace) {
      menu = eatingPlace.menu;
    }
    console.log(eatingPlace);
    return (
      <div className={styles.menuWrapper}>
        <div className={styles.menuContent}>
          <img src={menu ? menu : image} alt="menu" />
        </div>
      </div>
    );
  }
}
export default Menu;
