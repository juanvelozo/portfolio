import { AnimatePresence } from "framer-motion";
import React from "react";
import { useLocation, Route, Switch } from "react-router-dom";
import { NavBar } from "../components/Navbar/NavBar";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { Home } from "../pages/Home/Home";
import { Portfolio } from "../pages/Portfolio/Portfolio";

export const DashboardRoutes = () => {
  const location = useLocation();
  return (
    <>
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};
