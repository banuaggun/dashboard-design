import React from "react";

import "./Layout.css";

import Sidebar from "../Sidebars/Sidebar";
import Topnav from "../Topnav/Topnav";
import Routes from "../Routes";

import { BrowserRouter, Route } from "react-router-dom";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="layout">
            <Sidebar {...props} />
            <div className="layoutContent">
              <Topnav />
              <div className="layoutContent-Main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
