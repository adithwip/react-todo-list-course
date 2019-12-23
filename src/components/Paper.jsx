import React from "react";
import PropTypes from "prop-types";

import "../styles.css";

const Paper = ({ children }) => {
  return (
    <div className="paper">
      <div className="frame">{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
