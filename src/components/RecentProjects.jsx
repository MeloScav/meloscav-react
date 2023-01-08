import React, { forwardRef } from "react";

import projects from "/src/data/projects";
import ProjectsListItem from "/src/components/ProjectsListItem";

// Forward ref to be used in HomePage component
const RecentProjects = forwardRef((props, ref) => {
  const { ...propsRest } = props;

  // Reverse array's order to list the last "projectsLimit" projects
  const projectsLimit = 3;
  const lastProjects = [...projects].slice(projectsLimit * -1).reverse();

  return (
    <section
      ref={ref}
      id="projects-section"
      className="bg-light-secondary"
      {...propsRest}
    >
      <div className="container section-stack-sm">
        <h2>Mes projets récents</h2>

        {lastProjects.map((project, index) => (
          <ProjectsListItem
            key={index}
            project={project}
            className={`project-${index % 2 == 0 ? "left" : "right"}`}
          />
        ))}
      </div>
    </section>
  );
});

export default RecentProjects;
