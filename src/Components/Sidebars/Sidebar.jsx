import React from "react";

import { Link } from "react-router-dom";

import sidebar_items from "../../Assets/Data/SidebarRoutes.json";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLogo">
        <img src="" alt="logo" />
      </div>
      {sidebar_items.map((item, index) => (
        <Link to={item.route} key={index}>
          <div>{item.display_name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
