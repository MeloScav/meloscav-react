import React from "react";
import { Navigate, useParams } from "react-router-dom";

import projects from "/src/data/projects";
import categories from "/src/data/categories";
import ProjectsList from "/src/components/ProjectsList";
import ProjectsSlider from "/src/components/ProjectsSlider";
import ContactSection from "/src/components/shared/ContactSection";

import classNames from "/src/utilities/classNames";

const Category = (props) => {
  // Get categoryId from router (joker id)
  const { categoryId } = useParams();
  const { className, ...propsRest } = props;

  const currentCategory = categories.filter(
    (category) => category === categoryId
  )[0];

  let categoryName = "";

  switch (categoryId) {
    case "design":
      categoryName = "Design";
      break;
    case "development":
      categoryName = "Développement";
      break;
    case "illustration":
      categoryName = "Illustration";
      break;
    default:
      break;
  }

  document.title = categoryName;

  return (
    <>
      {/* If category not found (in data/categories) then navigate to NotFound component */}
      {!currentCategory ? (
        <Navigate to="/404" replace />
      ) : (
        <div className={classNames("section-stack", className)} {...propsRest}>
          <ProjectsList
            categoryId={categoryId}
            categoryName={categoryName}
            projects={projects}
          />
          <ProjectsSlider categoryId={categoryId} projects={projects} />
          <ContactSection />
        </div>
      )}
    </>
  );
};

export default Category;
