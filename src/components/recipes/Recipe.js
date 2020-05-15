import React from "react";
import BackLink from "../BackLink";
import Image from "../images/Image";
import Ingredients from "../ingredients/Ingredients";
import Directions from "../directions/Directions";

const Recipe = ({ recipe }) => {
  return (
    <main className="recipe">
      <div className="layout">
        <BackLink />
        <article className="info">
          <div className="title">
            <h2>{recipe.title}</h2>
            <p>
              <small>
                Posted: {recipe.postDate} - <em>(Updated {recipe.editDate})</em>
              </small>
            </p>
            <p>{recipe.description}</p>
            <p><strong>{recipe.servings} Servings</strong></p>
            <p>Prep Time: {recipe.prepTime}</p>
            <p>Cook Time: {recipe.cookTime}</p>
            <p><strong>Total Time</strong>: {recipe.prepTime + recipe.cookTime}</p>
          </div>
          <Image image={recipe.images.medium}
                  alt={recipe.title} />
          {/* <aside>
            <p>{recipe.description}</p>
            <p><strong>servings</strong>: {recipe.servings}</p>
            <p><strong>prepTime</strong>: {recipe.prepTime}</p>
            <p><strong>cookTime</strong>: {recipe.cookTime}</p>
          </aside> */}
          <Ingredients items={recipe.ingredients} />
          <Directions directions={recipe.directions} />
        </article>
        <BackLink />
      </div>
    </main>
  );
};

export default Recipe;