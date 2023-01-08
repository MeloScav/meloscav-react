import React from "react";
import Sprite from "/src/assets/sprite.svg";

const SpriteSVG = (props) => {
  const { iconId, className } = props;

  return (
    <svg className={className}>
      <use href={`${Sprite}#${iconId}`}></use>
    </svg>
  );
};

export default SpriteSVG;
