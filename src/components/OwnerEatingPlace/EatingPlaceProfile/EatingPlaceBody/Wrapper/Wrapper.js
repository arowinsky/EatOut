import React from "react";
import Posts from "../OwnerPosts/OwnerPosts";
import Menu from "../Menu/Menu";
import Info from "../Info/Info";
import Comments from "../Opinion/Opinion";

const Wrapper = ({ tabItem, active }) => {
  if (tabItem === "item1") {
    return (
      <div>
        <Posts />
      </div>
    );
  }
  if (tabItem === "item2") {
    return (
      <div>
        <Menu />
      </div>
    );
  }
  if (tabItem === "item3") {
    return (
      <div>
        <Info />
      </div>
    );
  }
  if (tabItem === "item4") {
    return (
      <div>
        <Comments />
      </div>
    );
  } else {
    return (
      <div>
        <Info />
      </div>
    );
  }
};
export default Wrapper;
