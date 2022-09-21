import "./App.css";
import "./custom.scss";
import { authProtectedRoutes, publicRoutes } from "./routes";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { getUser } from "./helpers/auth";

function App() {
  const userDetails = getUser();
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
              !userDetails ? <Navigate to="/form-page" /> : <route.component />
            }
            key={"auth" + index}
            isAuthProtected={!userDetails ? false : true}
            exact={true}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
