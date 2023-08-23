import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./store/index.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 如果store数据改变，重新渲染组件
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
