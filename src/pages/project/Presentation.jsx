import React from "react";
import LinkExtern from "/src/components/shared/LinkExtern";

const Presentation = (props) => {
  const { className, project, ...propsRest } = props;
  return (
    <section className={className} {...propsRest}>
      <div className="container">
        <div className="project-details-presentation">
          <div className="project-details-presentation-content">
            <h2 className="mb-lg">Présentation</h2>
            {project.presentation.text.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            {project.presentation.buttonLink && project.buttonLink !== "" ? (
              <LinkExtern
                className="btn btn-primary"
                to={project.presentation.buttonLink}
              >
                Voir le site
              </LinkExtern>
            ) : null}
          </div>

          <div className="project-details-presentation-img">
            <img src={project.presentation.image} alt={project.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
