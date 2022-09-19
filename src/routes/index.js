import LandingPage from "../components/LandingPage.js";
import Gallery from "../components/Gallery.js";
import UserDetails from "../components/UserDetails.js";
import FormPage from "../components/FormPage";

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
  {
    path: "/form-page",
    component: FormPage,
  },
];

export { authProtectedRoutes, publicRoutes };
