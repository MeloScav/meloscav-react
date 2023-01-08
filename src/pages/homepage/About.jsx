import React from "react";
import { Button } from "react-bootstrap";

import LinkExtern from "/src/components/shared/LinkExtern";
import minimalistIllustrationWoman from "/src/assets/minimalist-illustration-woman.svg";

const About = () => {
  return (
    <section className="bg-white">
      <div className="container section-stack-sm">
        <h2>A propos</h2>

        <div className="about-me">
          <img
            className="about-me-img"
            src={minimalistIllustrationWoman}
            alt="Minimalist illustration of a woman"
          />

          <div className="about-me-content">
            <h3 className="about-me-content-title text-primary">Méloé</h3>
            <div className="line"></div>
            <div className="about-me-content-info">
              <div className="about-me-content-info-text">
                <p>
                  Développeuse web frontend de base et passionnée par tout ce
                  qui est visuel, j’ai décidé de me lancer dans l’apprentissage
                  de l’UX / UI Design.
                </p>
                <p>
                  Dans mon temps libre, j’aime dessiner, peindre, me promener
                  ainsi que de découvrir des nouvelles technologies.
                </p>
                <p>
                  <strong className="text-secondary">Autodidacte</strong>,
                  <strong className="text-secondary"> curieuse </strong>
                  et
                  <strong className="text-secondary"> motivée</strong>, j’ai
                  envie d’
                  <strong>apprendre des nouvelles choses </strong>
                  et de
                  <strong> perfectionner mes connaissances</strong>.
                </p>
              </div>
              <div className="d-flex flex-wrap align-items-center grid-gap gap-32">
                <LinkExtern
                  className="btn btn-outline-primary"
                  to="/CV-SCAVEZZONI-Meloe.pdf"
                  download
                >
                  Télécharger mon CV
                </LinkExtern>
                <Button
                  variant="primary"
                  href="mailto:meloscavezzoni@gmail.com"
                >
                  Contactez-moi
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
