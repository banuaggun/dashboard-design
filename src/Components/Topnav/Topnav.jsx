import React from "react";

import Dropdown from "../Dropdowns/Dropdown";

import "./Topnav.css";

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnavSearch">
        <input type="text" placeholder="search here..." />
        <i className="bx bx-search-alt"></i>
      </div>
      <div className="topnavRight">
        <div className="topnavRight-item">
          <Dropdown />
          {/*dropdown here*/}
        </div>
        <div className="topnavRight-item">
          <Dropdown />
          {/*dropdown here*/}
        </div>
        <div className="topnavRight-item">
          <Dropdown />
          {/*theme settings*/}
        </div>
      </div>
    </div>
  );
};

export default Topnav;
