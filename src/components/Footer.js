import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="layout">
        <p>&copy; {new Date().getFullYear()} Recipes-R-Great</p>
      </div>
    </footer>
  );
};

export default Footer;