import React, { useState } from "react";

import { Link } from "react-router-dom";

import Dropdown from "../Dropdowns/Dropdown";

import notifications from "../../assets/Data/Notifications.json";

import userImage from "../../assets/images/gokyuzu.png";

import userMenu from "../../assets/Data/UserMenus.json";

import Search from "./SearchArea/Search";

import IconBell from "./IconBellArea/IconBell";

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
    <div className="userItem">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const Topnav = () => {
  return (
    <div className="topnav">
      <Search />
      <div className="topnavRight">
        <div className="topnavRight-item user">
          <Dropdown
            customToggle={() => renderUserToggle(currUser)}
            contentData={userMenu}
            renderItems={(item, index) => renderUserMenu(item, index)}
            renderHeader={() => <h5>View Profile</h5>}
            renderFooter={() => (
              <Link to="/">
                <span>Log Out</span>
              </Link>
            )}
          />
          {/*dropdown here*/}
        </div>
        <div className="topnavRight-item bell">
          <Dropdown
            renderIcon={() => <IconBell />}
            badge="8"
            contentData={notifications}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => (
              <Link to="/">
                <span>View All</span>
              </Link>
            )}
            renderHeader={() => <h5>Notifications</h5>}
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
