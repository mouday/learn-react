import React, { Component } from "react";

import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import MyNavLink from "./components/MyNavLink/MyNavLink.jsx";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {/* 跳转路由 */}
        <MyNavLink to="/about">About</MyNavLink>
        <MyNavLink to="/home">Home</MyNavLink>

        {/* 注册路由 */}
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/home" component={Home} />
          <Redirect to="/about"/>
        </Switch>
      </div>
    );
  }
}
