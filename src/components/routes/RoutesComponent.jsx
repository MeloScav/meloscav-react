import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import routes from "/src/routes";
import layoutActions from "/src/store/actions/layout";
import CustomLoadable from "/src/components/shared/CustomLoadable";
import Layout from "/src/components/layout/Layout";

const RoutesComponent = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(layoutActions.doCloseMobileMenu());
  }, [pathname]);

  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            exact
            path={route.path}
            element={
              <Layout hasFooter={route.path !== "*"}>
                <CustomLoadable loader={route.loader} />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default RoutesComponent;
