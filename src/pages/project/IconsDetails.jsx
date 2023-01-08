import React from "react";
import classNames from "/src/utilities/classNames";

const IconsDetails = (props) => {
  const { className, project, ...propsRest } = props;

  return (
    <section
      className={classNames("project-details-icons", className)}
      {...propsRest}
    >
      <div className="container">
        <h2 className="mb-lg project-details-icons-title">Les icônes</h2>
        {project.icons.map((icon, index) => (
          <div
            key={index}
            className={`project-details-icons-content icons-${
              index % 2 == 0 ? "left" : "right"
            }`}
          >
            <div className="icons-text">
              <img className="mb-lg" src={icon.icon} alt={icon.iconAlt} />
              <div className="texts">
                {icon.text.map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
              </div>
            </div>

            <div className="icons-image">
              <img src={icon.image} alt={project.title} />
            </div>
          </div>
        ))}
        <svg
          className="project-details-icons-wave"
          viewBox="0 0 1920 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H1920V59.5761C1430.69 -4.69575 1251.1 13.6325 976.986 41.6087C792.096 60.4786 564.198 83.7377 169.241 89H0V0Z"
            fill="#D595DF"
          />
        </svg>
      </div>
    </section>
  );
};

export default IconsDetails;
