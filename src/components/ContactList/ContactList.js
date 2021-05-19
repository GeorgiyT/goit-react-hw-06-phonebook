import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../redux/action";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul className={styles.contactList}>
        {contacts.map(el => (
          <li key={el.id}>
            {el.name}: {el.number}
            <button type="button" name={el.id} onClick={() => deleteContact(el.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const getFilteredContacts = () => {
    const normalizedFilter = state.filter.toLowerCase();
    return state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  return { contacts: getFilteredContacts() };
};

const mapDispatchToProps = {
  deleteContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
