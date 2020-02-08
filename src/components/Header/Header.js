import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import GuestNavbar from "../Navbars/GuestNavbar/GuestNavbar";
import UserNavbar from "../Navbars/UserNavbar/UserNavbar";

const Header = props => {
  const { isAuth, userIdProvider } = props;
  console.log(userIdProvider);
  let navbar;
  if (userIdProvider) {
    navbar = <UserNavbar click={props.sideBarClickHander} />;
  } else if (isAuth) {
    navbar = <UserNavbar click={props.sideBarClickHander} />;
  } else {
    navbar = <GuestNavbar />;
  }
  return (
    <div>
      <nav className={styles.wrapper}>
        <div className={styles.left}>
          <Logo />
        </div>
        <div className={styles.right}>{navbar}</div>
      </nav>
    </div>
  );
};

export default Header;
