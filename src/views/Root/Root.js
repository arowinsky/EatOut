import React from "react";
import "./index.css";
import HomeView from "../HomeView/HomeView";
import { BrowserRouter, Route } from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <h1>Działa!</h1>
          <Route exact path="/" component={HomeView} />
        </>
      </BrowserRouter>
    );
  }
}
export default Root;
