import React from "react";

import LinkExtern from "/src/components/shared/LinkExtern";
import SpriteSVG from "/src/components/shared/SpriteSVG";

const SocialMediaItem = (props) => {
  const { className, item, size } = props;
  return (
    <LinkExtern className={className} to={item.link}>
      <span className="visually-hidden">Lien vers ma page {item.label}</span>
      <SpriteSVG
        className={`icon icon-${size ?? "md"}`}
        iconId={item.label.toLowerCase()}
      />
    </LinkExtern>
  );
};

export default SocialMediaItem;
