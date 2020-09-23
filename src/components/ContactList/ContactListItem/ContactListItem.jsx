import React from "react";

const ContactsListItem = ({ name, number, onDeleteContact }) => {
  return (
    <li>
      <p>
        {name} {number}
      </p>
      <button type="button" onClick={onDeleteContact}>
        delete
      </button>
    </li>
  );
};

export default ContactsListItem;
