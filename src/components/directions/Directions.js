import React from "react";
import Direction from "./Direction";

const Directions = ({ directions }) => {

  return (
    <section className="directions">
      <h3>Directions</h3>
      <ol>
      {directions.map((direction, index) => (
        <Direction key = {`${index}-direction`}
                   direction = {direction} />
      ))}
      </ol>
    </section>
  );
};
export default Directions;