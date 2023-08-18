import axios from "axios";

import React, { Component } from "react";
import SearchInput from "./components/SearchInput/SearchInput.jsx";
import ItemList from "./components/ItemList/ItemList.jsx";
import "./App.css";

export default class App extends Component {
  state = {
    list: [],
    total: 0,
  };

  handleSearch = async (value) => {
    const res = await axios.get("https://api.github.com/search/users", {
      params: {
        q: value,
      },
    });

    this.setState({
      list: res.data.items,
      total: res.data.total_count,
    });
  };

  render() {
    const { list, total } = this.state;

    return (
      <div className="app">
        <h2>搜索Github用户</h2>
        
        <SearchInput onSearch={this.handleSearch}></SearchInput>

        <div className="app__total">共 {total} 条数据</div>

        <ItemList list={list}></ItemList>
      </div>
    );
  }
}
