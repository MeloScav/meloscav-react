import React, { createRef } from "react";

import RecentProjects from "/src/components/RecentProjects";
import Banner from "/src/pages/homepage/Banner";
import CategoriesList from "/src/pages/homepage/CategoriesList";
import About from "/src/pages/homepage/About";

const HomePage = () => {
  document.title = "Accueil";

  // Create reference to recent projects (via forwardRef)
  const recentProjectsRef = createRef(null);

  const scrollToProjectsSection = () => {
    if (recentProjectsRef.current) {
      window.scrollTo({
        top: recentProjectsRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Banner scrollToProjectsSection={scrollToProjectsSection} />
      <div className="section-stack section-py">
        <RecentProjects ref={recentProjectsRef} />
        <CategoriesList />
        <About />
      </div>
    </>
  );
};

export default HomePage;
