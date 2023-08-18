import React, { Component } from "react";
import "./SearchInput.css";

export default class SearchInput extends Component {
  state = {
    value: "",
  };

  handleInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleClick = () => {
    const { onSearch } = this.props;
    const { value } = this.state
    onSearch(value);
  };

  render() {
    return (
      <div className="search-input">  
        <input
          type="text"
          className="mo-input"
          placeholder="请输入搜索内容"
          onInput={this.handleInput}
        />
        <button className="mo-button search-input__button"  onClick={this.handleClick}>搜索</button>
      </div>
    );
  }
}
