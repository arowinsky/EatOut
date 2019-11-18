import React from "react";
import styles from "./OwnerNavbar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import UserData from "../../UserData/UserData";

const OwnerNavbar = props => {
  return (
    <nav className={styles.owner_nav_wrapper}>
      <ul className={styles.owner_nav_wrapper}>
        <li className={styles.owner_nav_navbarItem}>
          <div className={styles.welcome}>Witaj,</div>
        </li>
        <li className={styles.owner_nav_navbarItem}>
          <UserData />
        </li>
        <li className={styles.owner_nav_hamburger} onClick={props.click}>
          <FontAwesomeIcon icon={faBars} />
        </li>
      </ul>
    </nav>
  );
};

export default OwnerNavbar;
