import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavLog from "./NavLog";

import Login from "../Views/Login";
import Register from "../Views/Register";

const NavNotLog = () => (
  <>
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />
  </>
);
const Navigation = () => {
  return (
    <Router>
      <NavLog />
    </Router>
  );
};

export default Navigation;
