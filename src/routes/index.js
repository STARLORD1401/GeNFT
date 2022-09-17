import LandingPage from "../components/LandingPage.js";
import Gallery from "../components/Gallery.js";
import UserDetails from "../components/UserDetails.js";

const authProtectedRoutes = [];
const publicRoutes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/user-details",
    component: UserDetails,
  },
];

export { authProtectedRoutes, publicRoutes };
