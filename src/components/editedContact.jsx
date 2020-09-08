import React, { Component } from 'react';
import { editContact } from './store/contactAction';
import {connect} from 'react-redux' 

class editedContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: props.contact.Name,
            Surname: props.contact.Surname,
            Phone: props.contact.Phone,
            group: props.contact.group

        }
        this.id = props.match.params.id
    }

    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.Name);
    };

    handleSubmit = e => {
        e.preventDefault();
        const updatedInfo = {
            Name: this.state.Name,
            Surname: this.state.Surname,
            Phone: this.state.Phone,
            group: this.state.group
        };
        this.props.editContact(this.id,updatedInfo)
        this.setState({
            Name: '',
            Surname: '',
            Phone: '',
            group: ''
        });
        this.props.history.push('/');
    };
    render() {
        return (

            <form onSubmit={this.handleSubmit} className='add-contact-form'>
                <div class="contact100-form-title" >
                    <span class="contact100-form-title-1">
                        Contact Us
				</span>

                    <span class="contact100-form-title-2">
                        Feel free to drop us a line below!
				</span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Phone is required">
                    <label className="wrap-input100 validate-input" data-validate="Phone is required">NAME:</label>
                    <input class="input100" onChange={this.handleChange} value={this.state.Name} type='text' placeholder='Name' name='Name' />
                    <span class="focus-input100"></span>
                </div>
                <div className="wrap-input100 validate-input" data-validate="Phone is required">
                    <label className="wrap-input100 validate-input" data-validate="Phone is required">SURNAME:</label>
                    <input class="input100" onChange={this.handleChange} value={this.state.Surname} type='text' placeholder='Surname' name='Surname' />
                    <span class="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Phone is required">
                    <label className="wrap-input100 validate-input" data-validate="Phone is required">PHONE:</label>
                    <input class="input100" onChange={this.handleChange} value={this.state.Phone} type='number' placeholder='Phone' name='Phone' />
                    <span class="focus-input100"></span>
                </div>

                <div className="wrap-input100 validate-input" data-validate="Phone is required">
                    <label className="wrap-input100 validate-input" data-validate="Phone is required">GROUPS:</label>
                    <select onSubmit={this.handleSubmit} name='group'>
                        <option onChange={this.handleChange} value={this.state.group} >FAMILY</option>
                        <option onChange={this.handleChange} value={this.state.group}>CUSTOMER</option>
                        <option onChange={this.handleChange} value={this.state.group}>FRIEND</option>
                    </select>
                    <span class="focus-input100"></span>
                </div>


                <div class="container-contact100-form-btn">
                    <button class="contact100-form-btn" type='submit'>
                        <span>
                            SAVE
							<i class="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>

                <div id="dropDownSelect1"></div>

            </form>


        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    contact: state.contactsState.contacts.find(contact => contact.id === ownProps.match.params.id)
});

const mapDispatchToProps = {
    editContact: editContact

}





export default connect(mapStateToProps, mapDispatchToProps)(editedContact);