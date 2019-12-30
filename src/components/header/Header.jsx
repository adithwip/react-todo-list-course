/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import Button from "../button/Button";

// import styles from "./Header.module.css";
import * as styles from "./Header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  return (
    <section css={styles.header}>
      <Button text={showAdd ? "Done" : "Add"} onClick={showAddToggle} />
      <h1 css={styles.headerTitle}>Todo Lists</h1>
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
