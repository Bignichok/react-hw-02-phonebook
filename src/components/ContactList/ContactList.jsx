import React from "react";
import ContactsListItem from "./ContactListItem/ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => {
  const contactsListItems = contacts.map(({ id, name, number }) => {
    return (
      <ContactsListItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={() => onDeleteContact(id)}
      />
    );
  });
  return <ul>{contactsListItems}</ul>;
};
ContactList.defaultProps = {
  contacts: [],
  onDeleteContact: () => {},
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
