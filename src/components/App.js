import React from "react";
import {Switch, Route} from 'react-router-dom'
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NotFound from "./NotFound";
import Recipe from "./recipes/Recipe";

const RECIPES_URL = "http://localhost:3001/recipes";

const App = () => {

  let recipes = [];

  fetch(RECIPES_URL)
  .then(response => response.json())
  .then(jsonResponse => {recipes = jsonResponse;});

  const renderRecipes = (routerProps) => {
    let recipeId = routerProps.match.params.id;
    let foundRecipe = recipes.find(recObj => recObj.uuid === recipeId);
    return (foundRecipe ? <Recipe recipe={foundRecipe}/> : <NotFound/>);
  }

  return (
    <div className="App">
      <Header text="My Recipes" />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/recipes/:id' render={renderRecipes} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;