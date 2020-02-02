import React from "react";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/";

class Search extends React.Component {
  handleChange = e => {
    console.log(e.target.value);
    if (e.target.value) {
      let name = e.target.value;
      this.props.nameSearchEatingPlaces(name);
    }
  };
  render() {
    return (
      <form>
        <div className={styles.search_container}>
          <input
            className={styles.search_input}
            type="text"
            onChange={this.handleChange}
          />
          <button type="submit" className={styles.search_icon}>
            <FontAwesomeIcon icon={faSearchLocation} />
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    nameSearchEatingPlaces: name =>
      dispatch(actions.nameSearchEatingPlaces(name))
  };
};
export default connect(null, mapDispatchToProps)(Search);
