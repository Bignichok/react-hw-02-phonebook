import React from "react";
import PropTypes from "prop-types";

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

ContactsListItem.defaultProps = {
  name: "anonymous",
  number: "888888888",
  onDeleteContact: () => {},
};

ContactsListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
export default ContactsListItem;
