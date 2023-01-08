import React from "react";
import { Link } from "react-router-dom";

import SpriteSVG from "/src/components/shared/SpriteSVG";
import classNames from "/src/utilities/classNames";

const CardCategory = (props) => {
  const { className, item } = props;

  return (
    <div className={classNames(className, "card card-design")}>
      <div className="card-thumb">
        <SpriteSVG iconId={item.iconId} />
      </div>
      <div className="card-content text-lg">
        <p>{item.label}</p>
      </div>
      <Link to={item.to} className="stretched-link"></Link>
    </div>
  );
};

export default CardCategory;
