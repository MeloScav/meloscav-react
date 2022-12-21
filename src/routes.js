const routes = [
  {
    path: "/",
    loader: () => import("/src/pages/HomePage"),
  },
];

export default routes;
