import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

import SpriteSVG from "/src/components/shared/SpriteSVG";

const ProjectsSlider = (props) => {
  const { className, categoryId, isDetails, projects, ...propsRest } = props;

  const sliderOptions = {
    updateOnMove: true,
    type: "loop",
    perPage: 3,
    perMove: 1,
    trimSpace: "move",
    focus: "center",
    drag: true,
    breakpoints: {
      1199: {
        perPage: 2,
      },
      991: {
        perPage: 1,
        focus: 0,
      },
      600: {
        arrows: false,
      },
    },
  };

  let projectsToShow = projects;

  {
    /* Hide projects where category equals to categoryId (props) */
  }
  if (categoryId) {
    projectsToShow = projects.filter(
      (project) => !project.type.includes(categoryId.toLowerCase())
    );
  }

  return (
    <section className={isDetails ? "bg-light-secondary" : ""} {...propsRest}>
      <div className="container section-stack-sm">
        <h2 className="text-center">Voir plus de projets</h2>

        <Splide hasTrack={false} options={sliderOptions}>
          <div className="splide__track--wrapper">
            <SplideTrack>
              {projectsToShow.map((project, index) => (
                <SplideSlide key={index} className="project-card-wrapper">
                  <div className="project-card">
                    <img
                      className="project-card-img"
                      src={project.slideBanner}
                      alt={project.title}
                    />

                    {project.link ? (
                      <Link
                        className="project-card-link stretched-link"
                        to={project.link}
                      >
                        <span>Voir en détails</span>
                      </Link>
                    ) : null}
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </div>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <SpriteSVG iconId="slider-arrow-icon" />
            </button>
            <button className="splide__arrow splide__arrow--next">
              <SpriteSVG iconId="slider-arrow-icon" />
            </button>
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default ProjectsSlider;
