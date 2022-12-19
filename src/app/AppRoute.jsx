import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

// HOC: High Order Component
const AppRoute = ({ component: Comp, isPrivate, isAuth }) => {
  const token = localStorage.getItem("token");
  const profile = useSelector((state) => state.user.profile);
  if (isPrivate) {
    if (token) return <Comp />;
    return <Navigate to="/login" replace />;
  }
  if (isAuth) {
    if (!profile) return <Comp />;
    return <Navigate to="/" replace />;
  }
  return <Comp />;
};

export default AppRoute;
