import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Verificar la existencia del token en el localStorage
  const isAuthenticated = localStorage.getItem("accessToken");

  console.log("Token:", isAuthenticated);
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
