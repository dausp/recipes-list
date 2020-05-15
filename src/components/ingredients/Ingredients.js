import React, { useReducer, useEffect } from "react";
import Ingredient from "./Ingredient";
import Special from "../specials/Special";


const SPECIALS_URL = "http://localhost:3001/specials";

const initialState = {
  loading: true,
  specials: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SPECIALS_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "SPECIALS_SUCCESS":
      return {
        ...state,
        loading: false,
        specials: action.payload
      };
    default:
      return state;
  }
};

const Ingredients = ({ items }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(SPECIALS_URL)
    .then(response => response.json())
    .then(jsonResponse => {
      dispatch({
        type: "SPECIALS_SUCCESS",
        payload: jsonResponse
      });
    });
  }, []);

  const { specials, loading } = state;

  const checkForSpecial = (ingID) => {
    let theSpecial;
    for (const special of specials) {
      if (ingID === special.ingredientId) {
        theSpecial = <Special key={special.uuid}
                        special={special} />;
      }
    }
    return theSpecial;
  }

  const renderIngredients = () => {
   let ingredients = items.map((item, index) => (
      <li key={`${index}-${item.uuid}`}>
        <Ingredient key={`${index}-${item.uuid}`}
                    item={item} />
        {checkForSpecial(item.uuid)}
      </li>
      ))
    return ingredients;
  }

  return (
    <section className="ingredients">
      <h3>Ingredients</h3>
      {loading ? (
        <p>Loading Ingredients...</p>
      ) :
      <ul>
        {renderIngredients()}
      </ul>
      }
    </section>
  );
};

export default Ingredients;