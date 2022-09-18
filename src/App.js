import "./App.css";
import "./custom.scss";

import { authProtectedRoutes, publicRoutes } from "./routes";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
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
              // !userDetails ? <Navigate to="/login" /> :
              <route.component />
            }
            key={"auth" + index}
            // isAuthProtected={!userDetails ? false : true}
            isAuthProtected={false}
            exact={true}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
