import "./SideDrawer.css";
import React from "react";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer open"];
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="">Abstracts</a>
        </li>
        <li>
          <a href="">Past FRS</a>
        </li>
        <li>
          <a href="/">Log in</a>
        </li>
        <li>
          <a href="/">Sign up</a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
