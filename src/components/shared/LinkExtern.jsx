import React from "react";

const LinkExtern = (props) => {
  const { className, to, children, ...propsRest } = props;
  return (
    <a
      className={className}
      href={to}
      rel="noopener noreferrer"
      target="_blank"
      {...propsRest}
    >
      {children ? children : null}
    </a>
  );
};

export default LinkExtern;
