import React from "react";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import Navbar from "../../components/Navbar/Navbar";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <h1>Działa!</h1>
          <Route exact path="/" component={HomeView} />
        </>
      </BrowserRouter>
    );
  }
}
export default Root;
