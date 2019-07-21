import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => (
  <nav className={styles.wrapper}>
    <div className={styles.left} />
    <Logo />
    <div className={styles.right}>
      <Link className={styles.navbarItem} to="/login">
        Zaloguj
      </Link>
      <Link className={styles.navbarItem} to="/register">
        Dołącz do Portalu
      </Link>
    </div>
  </nav>
);

export default Navbar;
