import React from "react";
import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbars/Navbar/Navbar";
import OwnerNavbar from "../LocalOwner/OwnerNavbar/OwnerNavbar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGuest: true
    };
  }
  render() {
    return (
      <div>
        <header className={styles.wrapper}>
          <div className={styles.left}>
            <Logo />
          </div>
          <div className={styles.right}>
            {this.state.isGuest ? <Navbar /> : <OwnerNavbar />}
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
