import React from "react";

import { Link } from "react-router-dom";

import Dropdown from "../Dropdowns/Dropdown";

import notifications from "../../Assets/Data/Notifications.json";

import userImage from "../../Assets/images/gokyuzu.png";

import userMenu from "../../Assets/Data/UserMenus.json";

import "./Topnav.css";

const currUser = {
  displayName: "John Doe",
  image: userImage
};

const renderNotificationItem = (item, index) => (
  <div className="notificationItem" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnavRight-user">
    <div className="topnavRight-user-image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnavRight-user-name">{user.displayName}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notificationItem">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnavSearch">
        <i className="bx bx-search"></i>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="topnavRight">
        <div className="topnavRight-item">
          <Dropdown
            customToggle={() => renderUserToggle(currUser)}
            contentData={userMenu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
          {/*dropdown here*/}
        </div>
        <div className="topnavRight-item">
          <Dropdown
            icon="bx bx-bell"
            badge="12"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/">View All</Link>}
          />
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
