import React from "react";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";
import { connect } from "react-redux";

// const testInput = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
// ];

// localStorage.setItem("contacts", JSON.stringify(testInput));

class App extends React.Component {
  render() {
    return (
      <>
        <h2 className={styles.headers}>Phonebook</h2>
        <ContactForm />
        <h2 className={styles.headers}>Contacts</h2>
        <Filter />
        <ContactList />
      </>
    );
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
