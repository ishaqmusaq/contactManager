import ContactInfo from './components/ContactInfo'
import {  deleteContact } from './components/store/contactAction';
import { connect } from 'react-redux'
import React from 'react';

function contactInfoRef(props) {
    deleteContact = contact_id => {
    this.props.deleteContact(contact_id)
  };
    return (
        <div>
            <ContactInfo
                key={item.id}
                id={item.id}
                Name={item.Name}
                Surname={item.Surname}
                Phone={item.Phone}
                group={item.group}
                removeContact={this.deleteContact}
            /> 
        </div>
    );
}
const mapDispatchToProps = {
    
    deleteContact: deleteContact
}

export default connect( mapDispatchToProps)(contactInfoRef);