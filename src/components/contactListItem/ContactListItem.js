import React from 'react';
import PropTypes from 'prop-types';
import { ImBin, ImRadioChecked2 } from "react-icons/im";
import s from "./ContactListItem.module.css";

const ContactListItem = ({  id, name, number, onDeleteContact }) => {
    return (
            <li
            className={s.contactsItem}
            >
            <ImRadioChecked2 color="rgb(11, 100, 11)" size="10px"/> {name}:  {number}
            
            <button
            className={s.button}
            type="button"
            aria-label="Delete contact"    
            onClick={() => onDeleteContact(id)}
            >
            <ImBin color="rgb(11, 100, 11)" size="30px"/>
            </button>
            </li>
    )
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}

export default ContactListItem;