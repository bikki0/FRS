import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>

      <div className="toolbar_logo">
        <a href="/">Fisk Research Symposium</a>
      </div>

      <div className="spacer" />

      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Abstracts</a>
          </li>
          <li>
            <a href="/">Past FRS</a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/">Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
