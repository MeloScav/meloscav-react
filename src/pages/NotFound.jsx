import React from "react";
import { Link } from "react-router-dom";

import LinkExtern from "/src/components/shared/LinkExtern";
import notFoundSVG from "/src/assets/404-page/404.svg";

const NotFound = () => {
  document.title = "Page non trouvée";

  return (
    <section className="section-404 pt-main-nav-height">
      <div className="container">
        <div className="section-404-content">
          <img
            className="img-400-illustration"
            src={notFoundSVG}
            alt="Illustration 404 avec une pieuvre"
          />
          <div className="text-wrapper">
            <p>Oh, vous vous êtes apparemment perdu dans l’océan !</p>
            <p>
              N’hésitez pas à retourner sur la <b>page d’accueil</b> ou à aller
              voir des <b>magnifiques pieuvres</b> dans cet océan.
            </p>
          </div>
          <div className="buttons-wrapper d-flex flex-wrap grid-gap gap-32">
            <Link className="btn btn-outline-primary" to="/">
              Accueil
            </Link>
            <LinkExtern
              className="btn btn-primary"
              to="https://opensea.io/MeloScav?tab=created"
            >
              Pieuvres
            </LinkExtern>
          </div>
        </div>
      </div>

      <div className="waves-wrapper-404">
        <svg
          className="wave-404 wave wave-6"
          viewBox="0 0 1920 243"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 51C328 -108 691.5 161 957 161C1216.5 161 1465.5 -105 1920 50C1920 152 1920 243 1920 243H0C0 243 1.28746e-05 167.5 0 51Z"
            fill="#DCE8FB"
          />
        </svg>

        <svg
          className="wave-404 wave wave-7"
          viewBox="0 0 1920 265"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 73C397.5 232.5 637 0.5 955 0.5C1257.5 0.5 1431 248.5 1920 72C1920 174 1920 265 1920 265H0C0 265 1.28746e-05 189.5 0 73Z"
            fill="#DCE8FB"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
};

export default NotFound;
