import React, { Component } from "react";
import Item from "../Item/Item.jsx";
import "./ItemList.css";

export default class ItemList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="item-list">
        {list.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </div>
    );
  }
}
