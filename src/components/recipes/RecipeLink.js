import React from "react";
import {Link} from "react-router-dom";

const RecipeLink = ({ item, recipe }) => {
  return (
    <li key={`${item}-${recipe.uuid}`}>
      <Link key={`${item}-${recipe.uuid}`}
            to={`recipes/${recipe.uuid}`}>
        {recipe.title}
      </Link>
    </li>
  );
};

export default RecipeLink;