import React from "react";

const Special = ({ special }) => {

  const createMarkup = () => {
    return {__html: special.text};
  }

  return (
    <div className="special">
      <h4>{special.title} <em>({special.type})</em></h4>
      <span dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
};
export default Special;