const routes = [
  {
    path: "/",
    loader: () => import("/src/pages/homepage/HomePage"),
  },
  {
    path: "/category/:categoryId",
    loader: () => import("/src/pages/category/Category"),
  },
  {
    path: "/projects/:projectId",
    loader: () => import("/src/pages/project/Project"),
  },
  {
    path: "*",
    loader: () => import("/src/pages/NotFound"),
  },
];

export default routes;
