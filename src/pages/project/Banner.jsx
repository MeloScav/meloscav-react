import React from "react";
import { Link } from "react-router-dom";

import capitalize from "/src/utilities/capitalize";
import classNames from "/src/utilities/classNames";

const Banner = (props) => {
  const { className, project, ...propsRest } = props;

  return (
    <section
      className={classNames(
        "project-details project-details-banner container-full",
        className
      )}
      {...propsRest}
    >
      <div className="container pt-main-nav-height project-details-breadcrumb">
        {project.type.map((projectType, index, arr) => (
          <React.Fragment key={index}>
            <Link className="text-primary text-md" to={`/${projectType}`}>
              {projectType === "development"
                ? "Développement"
                : capitalize(projectType)}
            </Link>
            {arr.length > 1 && index < arr.length - 1 ? " / " : ""}
          </React.Fragment>
        ))}
      </div>

      <div className="container">
        <h1 className="project-details-title">{project.title}</h1>
      </div>

      <svg
        className="project-details-banner-wave"
        viewBox="0 0 1920 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.97291e-05 49.001C826.5 -76 907 80.9999 1920 81.0005C1920 81.3911 1920 82.0008 1920 82.0008H0.000455289C0.000455289 82.0008 -0.000242626 67.0011 8.97291e-05 49.001Z"
          fill="#FFFDFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M864.768 15.7844C741.47 17.4531 628.333 18.5122 539.781 18.5122C333.52 18.5122 184.705 41.5519 55.8653 61.4989C36.8485 64.443 18.2669 67.3198 8.36979e-05 70.0452C4.41352e-05 64.3136 1.71504e-05 58.8459 0 53.6802C1.44691e-05 52.1492 3.57526e-05 50.5868 6.50322e-05 49.001C399.277 -11.3862 624.453 -5.96018 864.768 15.7844Z"
          fill="#AB2BC0"
        />
      </svg>

      <img
        className="project-details-banner-img"
        src={project.detailsBanner}
        alt={project.title}
      />
    </section>
  );
};

export default Banner;
