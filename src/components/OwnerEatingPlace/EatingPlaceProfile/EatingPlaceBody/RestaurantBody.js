import React from "react";
import styles from "./RestaurantBody.module.scss";
import Wrapper from "./Wrapper/Wrapper";

class RestaurantBody extends React.Component {
  constructor() {
    super();

    this.state = {
      tabItem: "item1"
    };
  }

  handlePosts = () => {
    this.setState(state => ({
      tabItem: "item1"
    }));
  };

  handleMenu = () => {
    this.setState(state => ({
      tabItem: "item2"
    }));
  };

  handleInfo = () => {
    this.setState(state => ({
      tabItem: "item3"
    }));
  };

  handleComments = () => {
    this.setState(state => ({
      tabItem: "item4"
    }));
  };

  render() {
    const { eatingPlace } = this.props;
    return (
      <div className={styles.bodyWrapper}>
        <ul>
          <li onClick={this.handlePosts}>Aktulaności</li>
          <li onClick={this.handleMenu}>Menu</li>
          <li onClick={this.handleInfo}>Informacje</li>
          <li onClick={this.handleComments}>Opinie</li>
        </ul>
        <Wrapper
          tabItem={this.state.tabItem}
          active={this.state.active}
          eatingPlace={eatingPlace}
        />
      </div>
    );
  }
}

export default RestaurantBody;
