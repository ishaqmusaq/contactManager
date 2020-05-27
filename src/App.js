import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addContact, deleteContact } from './components/store/contactAction';


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

  deleteContact = user_id => {
    this.props.deleteContact(user_id)
  };

  render() {
    return (
      <div className='App'>
        {/**CONTACTS DATADBASE */}
        
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

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

const mapDispatchToProps = {
  addContact: addContact,
  deleteContact: deleteContact
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
