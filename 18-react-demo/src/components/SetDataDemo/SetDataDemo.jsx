import React, { Component } from "react";

export default class SetDataDemo extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    const { count } = this.state;

    console.log("before", this.state.count);

    this.setState(
      {
        count: count + 1,
      },
      () => {
        console.log("callback", this.state.count);
      }
    );

    console.log("after", this.state.count);
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h2>SetDataDemo</h2>
        <div>value: {count}</div>
        <button onClick={this.handleClick}>点击+1</button>
      </div>
    );
  }
}
