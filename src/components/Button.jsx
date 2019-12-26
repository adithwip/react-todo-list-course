import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color, align, onClick }) => {
  const classNames = [
    "header-btn",
    color === "black" && "main-black-color",
    color === "red" && "main-red-color",
    align === "left" && "align-left",
    align === "right" && "align-right"
  ].join(" ");

  return (
    <button className={classNames} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  align: PropTypes.oneOf(["left", "right"]),
  onClick: PropTypes.func
};

export default Button;
