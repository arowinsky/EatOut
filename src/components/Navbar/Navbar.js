import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <nav className={styles.wrapper}>
    <div className={styles.left} />
    <div className={styles.right}>
      <Button>Zaloguj</Button>
      <Button second>Wyloguj</Button>
    </div>
  </nav>
);

export default Navbar;
