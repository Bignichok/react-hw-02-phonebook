import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    if (contacts.some((contact) => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: uuidv4(),
        name: name,
        number: number,
      };
      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, contact],
        };
      });
    }
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        {contacts.length > 0 && (
          <section>
            <h2>Contacts</h2>

            {contacts.length > 1 && (
              <Filter value={filter} onChangeFilter={this.changeFilter} />
            )}
            {contacts.length > 1 && visibleContacts.length === 0 && (
              <p>no results were found for your search</p>
            )}

            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContact}
            />
          </section>
        )}
      </div>
    );
  }
}

export default App;
