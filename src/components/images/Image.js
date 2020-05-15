import React from "react";

const SERVER_URL = "http://localhost:3001/";

const Image = ({ image, alt }) => {

  return (
    <div className="image">
      <img src={ SERVER_URL + image } alt={"Photo of " + alt} />
    </div>
  );
};
export default Image;