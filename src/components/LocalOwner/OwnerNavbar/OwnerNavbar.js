import React from "react";
import styles from "./OwnerNavbar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const OwnerNavbar = () => (
  <nav className={styles.owner_nav_wrapper}>
    <ul className={styles.owner_nav_wrapper}>
      <li className={styles.owner_nav_navbarItem}>
        <Link className={styles.owner_nav_navbarItemLink} to="/">
         Wyloguj
        </Link>
      </li>
      <li className={styles.owner_nav_hamburger}> <FontAwesomeIcon icon={faBars} /></li>

    </ul>
  </nav>
);

export default OwnerNavbar;
