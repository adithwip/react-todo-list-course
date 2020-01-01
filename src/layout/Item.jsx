/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const Item = ({ children, flex, align }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${align};
      `}
    >
      {children}
    </div>
  );
};

Item.defaultProps = {
  align: "left"
};

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  align: PropTypes.oneOf([
    "left",
    "right",
    "center",
    "justify",
    "initial",
    "inherit"
  ]),
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Item;
