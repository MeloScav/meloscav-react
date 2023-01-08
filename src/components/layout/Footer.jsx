import React from "react";
import { Link } from "react-router-dom";

import menus from "/src/data/menus";
import socialMedia from "/src/data/socialMedia";
import MenuItem from "/src/components/layout/MenuItem";
import SocialMediaItem from "/src/components/shared/SocialMediaItem";

import LogoSVG from "/src/components/shared/LogoSVG";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave-wrapper">
        <svg
          className="footer-wave wave wave-3"
          viewBox="0 0 1920 127"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 75.4211C138.99 25.642 278.481 -41.5072 828.5 33.7086C1378.52 108.924 1693 103 1920 108.924C1920 121.5 1920 127.999 1920 127.999H0C0 127.999 0 84.4584 0 75.4211Z"
            fill="#F2DFF6"
          />
        </svg>
      </div>

      <div className="footer-content bg-light-primary">
        <div className="container">
          <Link className="d-inline-block" to="/">
            <span className="visually-hidden">Page d'accueil</span>
            <LogoSVG className="footer-logo" />
          </Link>

          <div className="footer-content-links">
            <div className="footer-content-links-menu">
              <h4 className="footer-title">Menu</h4>

              {menus.length > 0 ? (
                <ul className="list-unstyled">
                  {menus.map((menuItem) => (
                    <MenuItem
                      key={menuItem.label}
                      className="footer-link"
                      item={menuItem}
                      hideBadges={true}
                    />
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="footer-content-links-contact">
              <h4 className="footer-title">Contact</h4>
              <Link
                className="footer-link"
                to="mailto:meloscavezzoni@gmail.com"
              >
                meloscavezzoni@gmail.com
              </Link>
            </div>

            {socialMedia.length > 0 ? (
              <div className="footer-content-links-social-network">
                <h4 className="footer-title">Retrouvez-moi sur</h4>
                <div className="icons-container d-flex flex-wrap align-items-center grid-gap gap-32">
                  {socialMedia.map((item) => (
                    <SocialMediaItem
                      key={item.label}
                      className="footer-link"
                      item={item}
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
