import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

import layoutSelectors from "/src/store/selectors/layout";
import layoutActions from "/src/store/actions/layout";
import menus from "/src/data/menus.js";
import MenuItem from "/src/components/layout/MenuItem";
import classNames from "/src/utilities/classNames";

import LogoSVG from "/src/components/shared/LogoSVG";

const Header = () => {
  const dispatch = useDispatch();
  // Selectors from store
  const isMobileMenuVisible = useSelector(
    layoutSelectors.selectMobileMenuVisible
  );
  const isMenuTransparent = useSelector(layoutSelectors.selectMenuTransparent);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // MediaQueryList API, to handle window size without the need of resize event
    const desktopMatch = (e) => setIsSmallScreen(e.matches);
    const smallScreenMedia = window.matchMedia("(max-width: 991px)");
    smallScreenMedia.addEventListener("change", desktopMatch);
    desktopMatch(smallScreenMedia);

    return () => smallScreenMedia.removeEventListener("change", desktopMatch);
  }, [isSmallScreen]);

  useEffect(() => {
    const toggleBodyClass = () => {
      document.body.classList.toggle("nav-scrolled", window.scrollY > 0);
    };

    window.addEventListener("scroll", toggleBodyClass);

    return () => window.removeEventListener("scroll", toggleBodyClass);
  }, []);

  const doToggleMenu = () => dispatch(layoutActions.doToggleMobileMenu());

  useEffect(() => {
    document
      .querySelector("body")
      .classList.toggle("nav-open", isMobileMenuVisible);
  }, [isMobileMenuVisible]);

  return (
    <header
      className={classNames(
        "header-nav",
        isMenuTransparent ? "bg-transparent" : "bg-white"
      )}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo-container">
          <Link to="/">
            <span className="visually-hidden">Page d'accueil</span>
            <LogoSVG />
          </Link>
        </div>
        {menus.length > 0 ? (
          <nav
            className={`main-navbar${
              isSmallScreen ? "" : " remove-transition-lg"
            }`}
          >
            <ul>
              {menus.map((menuItem) => (
                <MenuItem key={menuItem.label} item={menuItem} />
              ))}
            </ul>

            <Button variant="primary" href="mailto:meloscavezzoni@gmail.com">
              Contactez-moi
            </Button>
          </nav>
        ) : null}

        <div className="navbar-toggle-wrapper" onClick={doToggleMenu}>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
