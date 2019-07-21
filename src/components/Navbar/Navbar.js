import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = ({ openModalFn }) => (
  <nav className={styles.wrapper}>
    <div className={styles.left} />
    <Logo />
    <div className={styles.right}>
      <Link to="/login">Zaloguj</Link>
      <Button second onClick={openModalFn}>
        Dołącz
      </Button>
    </div>
  </nav>
);

export default Navbar;
