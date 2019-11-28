import React from "react";
import Posts from "../OwnerPosts/OwnerPosts";
import Menu from "../Menu/Menu";
import Info from "../Info/Info";
import Comments from "../Opinion/Opinions";

const Wrapper = ({ tabItem, active, eatingPlace }) => {
  if (tabItem === "item1") {
    return (
      <div>
        <Posts eatingPlace={eatingPlace} />
      </div>
    );
  }
  if (tabItem === "item2") {
    console.log(eatingPlace);
    return (
      <div>
        <Menu eatingPlace={eatingPlace} />
      </div>
    );
  }
  if (tabItem === "item3") {
    return (
      <div>
        <Info eatingPlace={eatingPlace} />
      </div>
    );
  }
  if (tabItem === "item4") {
    return (
      <div>
        <Comments eatingPlace={eatingPlace} />
      </div>
    );
  } else {
    return (
      <div>
        <Info eatingPlace={eatingPlace} />
      </div>
    );
  }
};
export default Wrapper;
