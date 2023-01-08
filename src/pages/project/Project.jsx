import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import layoutActions from "/src/store/actions/layout";
import projects from "/src/data/projects";

import Banner from "/src/pages/project/Banner";
import Presentation from "/src/pages/project/Presentation";
import ColorsDetails from "/src/pages/project/ColorsDetails";
import FontsDetails from "/src/pages/project/FontsDetails";
import IconsDetails from "/src/pages/project/IconsDetails";
import DesignDetails from "/src/pages/project/DesignDetails";

import ContactSection from "/src/components/shared/ContactSection";
import ProjectsSlider from "/src/components/ProjectsSlider";

const Project = (props) => {
  const dispatch = useDispatch();

  // Get projectId from router (joker id)
  const { projectId } = useParams();
  const { className, ...propsRest } = props;

  // Check if current project's link equals to projectId (joker id)
  const currentProject = projects.filter(
    (project) => project.link.split("/").pop() === projectId.toLowerCase()
  )[0];

  if (currentProject) {
    document.title = `Projets | ${currentProject.title}`;
  }

  // Make menu transparent on this page and opaque when leaving
  useEffect(() => {
    dispatch(layoutActions.doMenuTransparent());

    return () => dispatch(layoutActions.doMenuOpaque());
  }, []);

  {
    /* If category not found (in data/categories) then navigate to NotFound component */
  }
  return !currentProject ? (
    <Navigate to="/404" replace />
  ) : (
    <>
      <Banner project={currentProject} />
      <div className="section-stack">
        {currentProject.presentation ? (
          <Presentation project={currentProject} />
        ) : null}
        {currentProject.detailsColors ? (
          <ColorsDetails project={currentProject} />
        ) : null}
        {currentProject.fonts ? (
          <FontsDetails project={currentProject} />
        ) : null}
        {currentProject.icons ? (
          <IconsDetails project={currentProject} />
        ) : null}
        {currentProject.icons ? (
          <DesignDetails project={currentProject} />
        ) : null}
        <ProjectsSlider
          projects={projects.filter(
            (project) => project.link !== currentProject.link
          )}
          isDetails={true}
        />
        <ContactSection />
      </div>
    </>
  );
};

export default Project;
