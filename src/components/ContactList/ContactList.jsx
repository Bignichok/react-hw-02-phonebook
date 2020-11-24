import React from "react";
import ContactsListItem from "./ContactListItem/ContactListItem";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => {
 
  return !!contacts &&
    <ul>{
      contacts.map(({ id, name, number }) => (
        <ContactsListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
    ))}</ul>;
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
