import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "../components/Navbar/NavBar";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Home } from "../pages/Home/Home";
import { Portfolio } from "../pages/Portfolio/Portfolio";

export const DashboardRoutes = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/portolio" component={Portfolio}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
    </>
  );
};
