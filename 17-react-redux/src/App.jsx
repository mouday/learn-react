import React, { Component } from "react";
import store from "./store.js";

export default class App extends Component {
  handleIncrement = () => {
    store.dispatch({ type: "INCREMENT" });
  };

  handleDecrement = () => {
    store.dispatch({ type: "DECREMENT" });
  };

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className="app">
        <div>{store.getState()}</div>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
      </div>
    );
  }
}
