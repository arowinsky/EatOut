import React from "react";
import styles from "./GuestNavbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className={styles.wrapper}>
    <ul className={styles.wrapper}>
      <li className={styles.navbarItem}>
        <Link className={styles.navbarItemLink} to="/login">
          Zaloguj
        </Link>
      </li>
      <li className={styles.navbarItem}>
        <Link className={styles.navbarItemLink} to="/register">
          Dołącz do Portalu
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
