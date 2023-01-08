import React from "react";

import ProjectsListItem from "/src/components/ProjectsListItem";
import classNames from "/src/utilities/classNames";

const ProjectsList = (props) => {
  const { className, categoryId, categoryName, projects, ...propsRest } = props;

  // Reverse array's order to list the last projects
  const categoryProjects = [...projects].reverse();

  return (
    <section
      className={classNames("projects-wrapper", className)}
      {...propsRest}
    >
      <div className="container pt-main-nav-height section-stack-sm">
        <h1>{categoryName}</h1>

        {/* Show projects where category equals to categoryId (props) */}
        {categoryProjects
          .filter((project) => project.type.includes(categoryId.toLowerCase()))
          .map((project, index) => (
            <ProjectsListItem
              key={index}
              project={project}
              className={`project-${index % 2 == 0 ? "left" : "right"}`}
            />
          ))}
      </div>

      <div className="project-banner-waves-wrapper">
        <svg
          className="project-banner-wave wave wave-4"
          viewBox="0 0 1920 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1920 0H0V59.5767C489.313 -4.69498 668.897 13.6333 943.013 41.6094C1127.89 60.4784 1355.78 83.7363 1750.7 89H1920V0Z"
            fill="#F2DFF6"
          />
        </svg>

        <svg
          className="project-banner-wave wave wave-5"
          viewBox="0 0 1920 103"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M-1 0H1922V68.9487C1431.92 -5.43325 1252.06 15.7781 977.513 48.155C792.346 69.9918 564.109 96.9077 168.581 103H-1V0Z"
            fill="#FBE9FF"
            fillOpacity="0.49"
          />
        </svg>
      </div>
    </section>
  );
};

export default ProjectsList;
