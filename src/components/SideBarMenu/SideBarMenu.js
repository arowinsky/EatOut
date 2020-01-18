import React from "react";
import styles from "./SideBarMenu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faUtensils,
  faUserCircle,
  faCog,
  faMapMarkedAlt,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const SideBarMenu = props => {
  console.log(props.userRule);
  return (
    <div>
      {props.userRule === "owner" ? (
        <nav className={styles.sidebar_wrapper}>
          <ul className={styles.sidebar_list}>
            <li className={styles.sidebar_item}>
              <Link to="/owner-home" className={styles.sidebar_item}>
                <FontAwesomeIcon
                  icon={faUtensils}
                  className={styles.sidebar_icon}
                />
                Twoje lokale
              </Link>
            </li>
            <li className={styles.sidebar_item}>
              <Link to="/owner-home" className={styles.sidebar_item}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className={styles.sidebar_icon}
                />
                Obserwowane lokale
              </Link>
            </li>
            <li className={styles.sidebar_item}>
              <FontAwesomeIcon icon={faCog} className={styles.sidebar_icon} />
              Ustawienia konta
            </li>
            <li className={styles.sidebar_item}>
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                className={styles.sidebar_icon}
              />
              Wyszkiwarka lokali
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
      ) : (
        <nav className={styles.sidebar_wrapper}>
          <ul className={styles.sidebar_list}>
            <li className={styles.sidebar_item}>
              <Link to="/owner-home" className={styles.sidebar_item}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className={styles.sidebar_icon}
                />
                Obserwowane lokale
              </Link>
            </li>
            <li className={styles.sidebar_item}>
              <FontAwesomeIcon icon={faCog} className={styles.sidebar_icon} />
              Ustawienia konta
            </li>
            <li className={styles.sidebar_item}>
              <FontAwesomeIcon
                icon={faMapMarkedAlt}
                className={styles.sidebar_icon}
              />
              Wyszkiwarka lokali
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
      )}
    </div>
  );
};

export default SideBarMenu;
