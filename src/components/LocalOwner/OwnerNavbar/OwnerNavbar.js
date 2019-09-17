import React from "react";
import styles from "./OwnerNavbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const OwnerNavbar = props => {
  console.log(props.userInfo);
  const { userInfo } = props;
  let name;
  if (userInfo) {
    name = <div className={styles.welcome}>{props.userInfo}</div>;
  }
  return (
    <nav className={styles.owner_nav_wrapper}>
      <ul className={styles.owner_nav_wrapper}>
        <li className={styles.owner_nav_navbarItem}>
          <div className={styles.welcome}>Witaj,</div>
        </li>
        <li className={styles.owner_nav_navbarItem}>{name}</li>
        <li className={styles.owner_nav_hamburger} onClick={props.click}>
          <FontAwesomeIcon icon={faBars} />
        </li>
      </ul>
    </nav>
  );
};

export default OwnerNavbar;
