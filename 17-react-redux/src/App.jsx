import React, { Component } from "react";

// import store from "./store/index.js";
// import { increment, decrement, incrementAsync } from "./store/actions.js";
import { connect } from "react-redux";
import { increment, decrement, incrementAsync } from "./store/actions.js";

class App extends Component {
  handleIncrement = () => {
    // store.dispatch(increment());
    this.props.increment();
  };

  handleDecrement = () => {
    // store.dispatch(decrement());
    this.props.decrement();
  };

  handleIncrementAsync = () => {
    // store.dispatch(incrementAsync(500));
    this.props.incrementAsync(500);
  };

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.forceUpdate();
  //   });
  // }

  render() {
    console.log(this.props);
    const { value } = this.props;

    return (
      <div className="app">
        {/* <div>{store.getState()}</div> */}
        <div>{value}</div>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleDecrement}>decrement</button>
        <button onClick={this.handleIncrementAsync}>异步increment</button>
      </div>
    );
  }
}


// 映射状态
function mapStateToProps(state) {
  return {
    value: state,
  };
}

// 映射方法
function mapDispatchToProps(dispatch) {
  return {
    // dispatching plain actions
    increment: (data) => dispatch(increment(data)),
    decrement: (data) => dispatch(decrement(data)),
    incrementAsync: (time) => dispatch(incrementAsync(null, time)),
  };
}
// 映射方法的简写形式 {functionName: action}
// const mapDispatchToProps = {
//   // dispatching plain actions
//   increment: increment,
//   decrement: decrement,
//   incrementAsync: incrementAsync,
// };

// 创建容器
export default connect(mapStateToProps, mapDispatchToProps)(App);
