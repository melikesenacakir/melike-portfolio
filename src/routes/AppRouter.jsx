import NotFound from "../pages/404";
import { Navigate } from "react-router-dom";
import { Index } from "../pages";
import { About } from "../pages/about";
import { Articles } from "../pages/articles";
import { Projects } from "../pages/projects";
import { Skills } from "../pages/skills";

const routes = {
  public: [
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "404",
      element: <NotFound />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "articles",
      element: <Articles />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
    {
      path: "skills",
      element: <Skills />,
    },
  ]
};

const AppRouter = [
  {
    path: "/",
    children: [
      ...routes.public,
    {
      path: "*",
      element: (
        <Navigate
          to="/404"
          replace
        />
      ),
      perm: "public",
    }
    ],
  },
];


export default AppRouter;
