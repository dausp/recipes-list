import React from "react";

const Direction = ({ direction }) => {

  return (
    <li className="direction">
      {direction.optional &&
        <em>(Optional): </em>
      }
      {direction.instructions}
    </li>
  );
};
export default Direction;