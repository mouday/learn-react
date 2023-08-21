import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    return <NavLink activeClassName="custom-active" {...this.props} />;
  }
}
