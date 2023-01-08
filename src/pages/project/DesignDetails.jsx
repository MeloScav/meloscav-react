import React from "react";
import classNames from "/src/utilities/classNames";

const DesignDetails = (props) => {
  const { className, project, ...propsRest } = props;

  return (
    <section
      className={classNames("project-details-design", className)}
      {...propsRest}
    >
      <div className="container">
        <h2>Le design</h2>

        {project.design.map((design, index) => (
          <div
            key={index}
            className={`project-details-design-content img-${
              index % 2 == 0 ? "left" : "right"
            }`}
          >
            <div className="design-text">
              {design.text.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <div className="design-image">
              <img src={design.image} alt={project.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignDetails;
