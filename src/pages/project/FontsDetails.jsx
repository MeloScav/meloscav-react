import React from "react";
import classNames from "/src/utilities/classNames";

const FontsDetails = (props) => {
  const { className, project, ...propsRest } = props;

  return (
    <section
      className={classNames("project-details-font", className)}
      {...propsRest}
    >
      <div className="container">
        <h2 className="mb-lg">Les polices</h2>

        {project.fonts.map((font, index) => (
          <div key={index} className="project-details-font-content">
            <div className="font-image">
              <img src={font.image} alt={project.title} />
            </div>

            <div className="font-text mb-left">
              <h3>{font.title}</h3>

              {font.text.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FontsDetails;
