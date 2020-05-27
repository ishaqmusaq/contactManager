import React from 'react';
import { Link } from 'react-router-dom';

const ContactInfo = ({Name,id,Surname,Phone,group,removeContact}) => {
    const handleClick = () => {
        removeContact(id)
    }
    return (
        <div>
            <button type='display' >
                <h1>CONTACT INFO</h1>
                <h3>NAME: {Name}</h3>
                <p>SURNAME: {Surname}</p>
                <p>PHONE: {Phone}</p>
                <p>GROUP: {group}</p>
                <button onClick={handleClick}>DLELTE_CONTACT</button><br />
                <Link to={`/edit/${id}`}>EDIT CONTACT</Link>
            </button>
            <hr/>
        </div>
    );
}

export default ContactInfo;