import React from "react";

import Header from "/src/components/layout/Header";
import Footer from "/src/components/layout/Footer";
import LoaderComponent from "/src/components/shared/LoaderComponent";

const Layout = (props) => {
  const { children, hasFooter } = props;
  document.title = "Méloé Scavezzoni";

  return (
    <>
      <Header />
      {children ? <main>{children}</main> : null}
      {hasFooter ? <Footer /> : null}
      <LoaderComponent />
    </>
  );
};

export default Layout;
