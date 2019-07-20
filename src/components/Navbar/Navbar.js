import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.scss";

const Navbar = ({ openModalFn }) => (
  <nav className={styles.wrapper}>
    <div className={styles.left} />
    <div className={styles.right}>
      <Button>Zaloguj</Button>
      <Button second onClick={openModalFn}>
        Dołącz
      </Button>
    </div>
  </nav>
);

export default Navbar;
