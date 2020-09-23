import React from "react";
import ContactsListItem from "./ContactListItem/ContactListItem";

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

export default ContactList;
