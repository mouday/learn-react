import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  render() {
    const { id, avatar_url, login } = this.props;

    return (
      <div className="item">
        <img className="item__avatar" src={avatar_url} alt="" />
        <div className="item__name">{login}</div>
      </div>
    );
  }
}
