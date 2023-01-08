import React from "react";
import { Button } from "react-bootstrap";

import socialMedia from "/src/data/socialMedia";
import SocialMediaItem from "/src/components/shared/SocialMediaItem";

import meCartoonIllustration from "/src/assets/me-cartoon-illustration.svg";

const Banner = (props) => {
  const { className, scrollToProjectsSection, ...propsRest } = props;

  return (
    <div className="main-banner-wrapper pt-main-nav-height">
      <div className="container">
        <div className="main-banner">
          <div className="main-banner-content">
            <p className="main-banner-sub-title text-md">
              Frontend web developer & UX / UI Designer
            </p>
            <h1 className="main-banner-title">Méloé Scavezzoni</h1>

            <p className="main-banner-description text-lg">
              Actuellement à la recherche d’un
              <span className="text-secondary fw-bold"> job</span>
            </p>
            <div className="d-flex flex-wrap align-items-center grid-gap gap-32">
              <Button
                variant="outline-primary"
                onClick={scrollToProjectsSection}
              >
                Voir plus
              </Button>
              <Button variant="primary" href="mailto:meloscavezzoni@gmail.com">
                Contactez-moi
              </Button>
            </div>

            {socialMedia.length > 0 ? (
              <div className="icons-container d-flex flex-wrap align-items-center grid-gap gap-32">
                {socialMedia.map((item) => (
                  <SocialMediaItem key={item.label} item={item} size="lg" />
                ))}
              </div>
            ) : null}
          </div>
          <img
            className="main-banner-illu"
            src={meCartoonIllustration}
            alt="Illustration de Méloé Scavezzoni"
          />
        </div>
      </div>

      <div className="main-banner-waves-wrapper">
        <svg
          className="main-banner-wave wave wave-1"
          viewBox="0 0 1920 73"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#DCE8FB"
            d="M1920 33C1689.1 -18.8235 1197.23 47.0527 969.622 47.1193C742.01 47.186 173.915 -47.9521 -0.000530051 34C0.00929529 67.5438 -9.28683e-05 73 -9.28683e-05 73L969.5 73L1920 73C1920 73 1920 49.9466 1920 33Z"
          />
        </svg>
        <svg
          className="main-banner-wave wave wave-2"
          viewBox="0 0 1920 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 53.764C338 62.1013 645 0.57891 962 0.00386357C1279 -0.571183 1412 63.2512 1920 53.764V92H0V53.764Z"
            fill="#DCE8FB"
            fillOpacity="0.51"
          />
        </svg>
      </div>
    </div>
  );
};

export default Banner;
