import React from "react";

import * as services from "../services/sessions-services";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();
const FoxbelMusic = "FoxbelMusic";

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(
    JSON.parse(sessionStorage.getItem(FoxbelMusic)) || null
  );
  const navigate = useNavigate();

  function login(credentials) {
    setUser(credentials);
    sessionStorage.setItem(FoxbelMusic, JSON.stringify(credentials));
  }

  function signin(credentials) {
    console.log(credentials);
    setUser(credentials);
    sessionStorage.setItem(FoxbelMusic, JSON.stringify(credentials));
  }

  function logout() {
    services.logout();
    setUser(null);
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ user, login, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

export { AuthProvider, useAuth };
