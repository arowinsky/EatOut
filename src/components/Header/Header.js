import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbars/Navbar/Navbar";

const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.left}>
      <Logo />
    </div>
    <div className={styles.right}>
      <Navbar />
    </div>
  </header>
);

export default Header;
