import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("accessToken") || "");
  const [roleUser, setRole] = useState(localStorage.getItem("userRole") || "");
  const login = (newToken, role) => {
    localStorage.setItem("accessToken", newToken);
    setToken(newToken);
    setRole(role);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setToken("");
  };

  return (
    <AuthContext.Provider value={{ token, roleUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
