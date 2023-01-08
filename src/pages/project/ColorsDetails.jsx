import React from "react";
import classNames from "/src/utilities/classNames";

const ColorsDetails = (props) => {
  const { className, project, ...propsRest } = props;

  return (
    <section
      className={classNames("project-details-colors", className)}
      {...propsRest}
    >
      <div className="container">
        <h2 className="project-details-colors-title mb-lg">Les couleurs</h2>

        <div className="project-details-colors-content">
          <div className="colors-wrapper grid-gap gap-32">
            {project.detailsColors.colors.map((color, index) => (
              <div key={index} className="color">
                <div
                  className={`color-block ${project.detailsColors.cssClass}-${color.name}`}
                >
                  <p>{color.colorHex}</p>
                </div>
                <div className="color-text">
                  <p>{color.text}</p>
                </div>
              </div>
            ))}
          </div>

          <img
            className="project-details-colors-img"
            src={project.detailsColors.image}
            alt={project.title}
          />
        </div>
      </div>

      <svg
        className="project-details-colors-wave"
        viewBox="0 0 1920 89"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H1920V59.5765C1430.68 -4.69552 1251.1 13.6328 976.985 41.609L976.985 41.609C792.098 60.4785 564.206 83.7371 169.264 89H0V0Z"
          fill="#8FB9F1"
        />
      </svg>
    </section>
  );
};

export default ColorsDetails;
