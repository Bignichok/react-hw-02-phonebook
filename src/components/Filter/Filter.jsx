import React from "react";
import styles from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div className={styles.wrp}>
      <label>
        Find Contacts by name
        <input
          type="text"
          value={filter}
          onChange={({ target }) => onChangeFilter(target.value)}
        />
      </label>
    </div>
  );
};

Filter.defaultProps = {
  onChangeFilter: () => {},
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
