import React, { useContext } from "react";
import "./App.css";
import "./custom.scss";
import { authProtectedRoutes, publicRoutes } from "./routes";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
// import { getUser } from "./helpers/auth";

function App() {
  // const userDetails = getUser();
  const { userDetails } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            path={route.path}
            element={<route.component />}
            key={"public" + index}
            isAuthProtected={false}
            exact={true}
          />
        ))}
        {authProtectedRoutes.map((route, index) => (
          <Route
            path={route.path}
            element={
              !userDetails?._id ? (
                <Navigate to="/form-page" />
              ) : (
                <route.component />
              )
            }
            key={"auth" + index}
            isAuthProtected={!userDetails?._id ? false : true}
            exact={true}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
