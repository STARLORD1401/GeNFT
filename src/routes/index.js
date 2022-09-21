import LandingPage from "../components/LandingPage.js";
import Gallery from "../components/Gallery.js";
import ProfileSettings from "../components/ProfileSettings";
import FormPage from "../components/FormPage";
import Generator from "../components/Generator.js";

const authProtectedRoutes = [
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/profile-settings",
    component: ProfileSettings,
  },
  {
    path: "/profile-settings",
    component: ProfileSettings,
  },
  {
    path: "/python-test",
    component: Generator,
  },
];
const publicRoutes = [
  {
    path: "/",
    component: LandingPage,
  },

  {
    path: "/form-page",
    component: FormPage,
  },
];

export { authProtectedRoutes, publicRoutes };
