import React from "react";
import Stage from "../../components/Header/Stage/Stage";
import ResultSearch from "../../components/Header/ResultSearch/ResultSearch";
class HomeView extends React.Component {
  render() {
    return (
      <div>
        <Stage />
        <ResultSearch />
      </div>
    );
  }
}

export default HomeView;
