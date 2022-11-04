import LandingPage from "../components/LandingPage.js";
import Gallery from "../components/Gallery.js";
import ProfileSettings from "../components/ProfileSettings";
import FormPage from "../components/FormPage";
import Generator from "../components/Generator.js";

const authProtectedRoutes = [
  {
    path: "/",
    component: Gallery,
  },
  {
    path: "/profile-settings",
    component: ProfileSettings,
  },
  {
    path: "/generator",
    component: Generator,
  },
];
const publicRoutes = [
  {
    path: "/landing",
    component: LandingPage,
  },

  {
    path: "/form-page",
    component: FormPage,
  },
];

export { authProtectedRoutes, publicRoutes };
