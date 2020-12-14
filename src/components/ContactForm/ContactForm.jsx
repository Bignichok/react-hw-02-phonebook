import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.phonebookForm}>
      <label htmlFor="formName">
        Name
        <input
          required
          id="formName"
          type="text"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </label>
      <label htmlFor="formNumber">
        Number
        <input
          id="formNumber"
          type="number"
          name="number"
          value={number}
          required
          onChange={({ target }) => setNumber(target.value)}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};

export default ContactForm;
