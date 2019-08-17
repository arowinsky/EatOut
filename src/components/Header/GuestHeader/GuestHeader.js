import React from "react";
import styles from "./GuestHeader.module.scss";
import Logo from "../../Logo/Logo";
import Navbar from "../../Navbars/Navbar/Navbar";

const GuestHeader = () => (
  <header className={styles.wrapper}>
    <div className={styles.left}>
      <Logo />
    </div>
    <div className={styles.right}>
      <Navbar />
    </div>
  </header>
);

export default GuestHeader;
