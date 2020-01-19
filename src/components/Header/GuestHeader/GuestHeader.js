import React from "react";
import styles from "./GuestHeader.module.scss";
import Logo from "../../Logo/Logo";
import GuestNavbar from "../../Navbars/GuestNavbar/GuestNavbar";

const GuestHeader = () => (
  <header className={styles.wrapper}>
    <div className={styles.left}>
      <Logo />
    </div>
    <div className={styles.right}>
      <GuestNavbar />
    </div>
  </header>
);

export default GuestHeader;
