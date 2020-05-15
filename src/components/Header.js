import React from "react";
import {Link} from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <div className="layout">
        <h1><Link to='/'>{props.text}</Link></h1>
      </div>
    </header>
  );
};

export default Header;