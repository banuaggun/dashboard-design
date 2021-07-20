import React from "react";

import { Link } from "react-router-dom";

import Dropdown from "../Dropdowns/Dropdown";

import notifications from "../../Assets/Data/Notifications.json";

import userMenu from "../../Assets/Data/UserMenus.json";

import "./Topnav.css";

const currUser = {
  displayName: "John Doe"
  /*image: userImage*/
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
      <img src="" alt="user photo" />
    </div>
    <div className="topnavRight-user-name">{user.displayName}</div>
  </div>
);

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="topnavSearch">
        <input type="text" placeholder="search here..." />
        <i className="bx bx-search-alt"></i>
      </div>
      <div className="topnavRight">
        <div className="topnavRight-item">
          <Dropdown customToggle={() => renderUserToggle(currUser)} />
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
