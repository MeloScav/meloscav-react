import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import layoutActions from "/src/store/actions/layout";

const LoadingComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(layoutActions.doStartLoading());

    return () => dispatch(layoutActions.doFinishLoading());
  }, []);

  return null;
};

export default LoadingComponent;
