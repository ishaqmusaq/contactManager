import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logoutContact} from './components/store/authAction'
import { addContact, deleteContact,getAllContacts } from './components/store/contactAction';
import '../src/App.css'

import ContactHomePage from './components/ContactHomePage';
import ContactInfo from './components/ContactInfo'

class App extends Component {
  constructor(props){
  super(props)
  this.state = {
    contacts:[
      {
Name:'ishaq',
Surname:'musah',
Phone:'+23355470719',
group:'family'
 },

    ],
   
  }
}





  addNewContact = newContact => {
    this.props.addContact(newContact)
  };

  deleteContact = contact_id => {
    this.props.deleteContact(contact_id)
  };

  componentDidMount() {
    this.props.getAllContacts();
  }

  render() {
    return (
      <div className='App'>
        {/**CONTACTS DATADBASE */}
        <button onClick={this.props.logoutContact}>Logout</button>
           <ContactHomePage  addContact = {this.addNewContact}/>
        <div className='contact_user_info'>
          {this.props.contacts.map((item)=>
          {
            return(
              
             

                <ContactInfo
                  key={item.id}
                  id={item.id}
                  Name={item.Name}
                  Surname={item.Surname}
                  Phone={item.Phone}
                  group={item.group}
                  removeContact={this.deleteContact}
                />
                

        
            );
          }
            
            )}

        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
  contacts: state.contactState.contacts
}}

const mapDispatchToProps = {
  addContact,
  deleteContact,
  getAllContacts,
  logoutContact
  

}


export default connect(mapStateToProps, mapDispatchToProps)(App);
