import React from "react";
import { NavLink } from "react-router-dom";

import { Badge } from "react-bootstrap";
import LinkExtern from "/src/components/shared/LinkExtern";
import classNames from "/src/utilities/classNames";

const MenuItem = (props) => {
  const { className, item, hideBadges } = props;

  return (
    <li
      className={classNames(
        className,
        item.isNew && !hideBadges ? "badge-wrapper" : ""
      )}
    >
      {item.to ? (
        <NavLink to={item.to}>
          <span>{item.label}</span>
        </NavLink>
      ) : item.href ? (
        <LinkExtern to={item.href}>
          <span>{item.label}</span>
        </LinkExtern>
      ) : null}
      {item.isNew && !hideBadges ? (
        <Badge className="badge--absolute badge--top-right" bg="secondary">
          New
        </Badge>
      ) : null}
    </li>
  );
};

export default MenuItem;
