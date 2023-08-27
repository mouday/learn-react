import React from "react";
import { NavLink, Navigate, useRoutes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

export default function App() {
  const routes = useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/",
      element: <Navigate to="/home" />,
    },
  ]);

  return (
    <div className="app">
      {/* 路由链接 */}
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      {/* 注册路由 */}
      {routes}
    </div>
  );
}
