import { Component } from "react";
// import "./Welcome.css";
import "./Welcome.less";

export default class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <h1 className="title">Welcome to React</h1>
      </div>
    );
  }
}
