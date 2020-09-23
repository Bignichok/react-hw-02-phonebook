import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div className={styles.wrp}>
      <label>
        Find Contacts by name
        <input
          type="text"
          value={filter}
          onChange={(e) => onChangeFilter(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Filter;
