import React from "react";
import LoadingComponent from "/src/components/shared/LoadingComponent";

const CustomLoadable = (props) => {
  const { loader, ...propsRest } = props;
  // Lazy load needed component (via props)
  const LazyComponent = React.lazy(loader);

  return (
    <React.Suspense fallback={<LoadingComponent />}>
      <LazyComponent {...propsRest} />
    </React.Suspense>
  );
};

export default CustomLoadable;
