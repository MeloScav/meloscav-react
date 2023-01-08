import React from "react";
import { Link } from "react-router-dom";

import classNames from "/src/utilities/classNames";

const ProjectsListItem = (props) => {
  const { className, project, ...propsRest } = props;

  return (
    <div
      className={classNames("project", className, project.cssClass ?? null)}
      {...propsRest}
    >
      <div className="box-image">
        {project.introductionBanner ? (
          <img src={project.introductionBanner} alt={project.title} />
        ) : null}

        <div className="overlay"></div>
      </div>
      <div className="project-info">
        {project.title ? <h3 className="h4">{project.title}</h3> : null}
        {project.shortDescription ? <p>{project.shortDescription}</p> : null}
        {project.link ? (
          <Link className="btn btn-outline-primary" to={project.link}>
            En savoir plus
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectsListItem;
