import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToggle, showAdd }) => {
  return (
    <section className="header">
      <button
        className="header-btn main-black-color"
        style={{ visibility: showAdd ? "hidden" : "visible" }}
        onClick={showAddToggle}
      >
        Add
      </button>
      <h1 className="header-title">Todo Lists</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default Header;
