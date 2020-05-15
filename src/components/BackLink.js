import React from "react";
import {Link} from "react-router-dom";

const BackLink = () => {
  return (
    <div className="backLink">
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default BackLink;