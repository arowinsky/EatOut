import React from "react";
import styles from "./SideBarMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faUserCircle,
  faCog,
  faMapMarkedAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const SideBarMenu = props => (
  <nav className={styles.sidebar_wrapper}>
    <ul className={styles.sidebar_list}>
      <li className={styles.sidebar_item}>
        <Link to="/owner-home" className={styles.sidebar_item}>
          <FontAwesomeIcon
            icon={faUserCircle}
            className={styles.sidebar_icon}
          />
          Twoje konto
        </Link>
      </li>
      <li className={styles.sidebar_item}>
        <FontAwesomeIcon icon={faCog} className={styles.sidebar_icon} />
        Ustawienia
      </li>
      <li className={styles.sidebar_item}>
        <FontAwesomeIcon
          icon={faMapMarkedAlt}
          className={styles.sidebar_icon}
        />
        Szukaj lokalu
      </li>

      <li className={styles.sidebar_item}>
        <Link to="/logout" className={styles.sidebar_item}>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className={styles.sidebar_icon}
          />
          Wyloguj
        </Link>
      </li>
    </ul>
  </nav>
);

export default SideBarMenu;
