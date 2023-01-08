import React from "react";

import menus from "/src/data/menus";
import CategoryCard from "/src/pages/homepage/CategoryCard";

const CategoriesList = () => {
  return (
    <section className="bg-grey-100">
      <div className="container section-stack-sm">
        <h2 className="text-center">Voir plus de projets</h2>

        {menus.length > 0 ? (
          <div className="cards-container">
            {menus.map((menuItem) =>
              menuItem.iconId ? (
                <CategoryCard key={menuItem.label} item={menuItem} />
              ) : null
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default CategoriesList;
