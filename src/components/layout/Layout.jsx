import React from "react";
import Header from "/src/components/layout/Header";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children ? <main>{children}</main> : null}
    </>
  );
};

export default Layout;
