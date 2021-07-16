import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../Pages/Dashboard";
import Customers from "../Pages/Customers";

import "../styles.css";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/customers" component={Customers} />
    </Switch>
  );
};

export default Routes;
