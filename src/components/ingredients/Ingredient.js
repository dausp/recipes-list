import React from "react";

const Ingredient = ({ item}) => {
  return (
    <p>
      {item.name}
      {item.amount &&
        ` - ` + item.amount
      }
      {item.measurement &&
        ` ` + item.measurement
      }
    </p>
  );
};
export default Ingredient;