import React, { Component } from "react";
import store from "./store/index.js";
import { increment, decrement, incrementAsync } from "./store/actions.js";

export default class App extends Component {
  handleIncrement = () => {
    store.dispatch(increment());
  };

  handleDecrement = () => {
    store.dispatch(decrement());
  };

  handleIncrementAsync = () => {
    store.dispatch(incrementAsync(500));
  };

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.forceUpdate();
  //   });
  // }

  render() {
    return (
      <div className="app">
        <div>{store.getState()}</div>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
        <button onClick={this.handleIncrementAsync}>异步increment</button>
      </div>
    );
  }
}
