import React, { useReducer, useEffect } from "react";
import RecipeLink from "./recipes/RecipeLink";

const RECIPES_URL = "http://localhost:3001/recipes";

const initialState = {
  loading: true,
  recipes: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RECIPES_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "RECIPES_SUCCESS":
      return {
        ...state,
        loading: false,
        recipes: action.payload
      };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(RECIPES_URL)
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({
        type: "RECIPES_SUCCESS",
        payload: jsonResponse
      });
    });
  }, []);

  const { recipes, loading } = state;

  const renderRecipeLinks = () => {
    let recipeLinks = recipes.map((recipe, index) => (
     <RecipeLink key={`${index}-${recipe.uuid}`}
                 item={index}
                 recipe={recipe} />
    ))
    return recipeLinks;
  }

  return (
    <main className="Home">
      <div className="layout">
        <article>
          <h2>Recipes</h2>
          {loading  ? (
            <p>Loading Recipes...</p>
          ) :
            <ul>
              {renderRecipeLinks()}
            </ul>
          }
        </article>
      </div>
    </main>
  );
};

export default Home;