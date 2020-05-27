import React, { Component } from 'react';
class ContactHomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            id:'1',
            Name: '',
            Surname: '',
            Phone: '',
            group: ''

        };
    
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state.Name);
    };
     

    handleSubmit = e => {
        e.preventDefault();
        const newContact = {
            Name: this.state.Name,
            Surname: this.state.Surname,
            Phone: this.state.Phone,
            group: this.state.group
        };
        this.props.addContact(newContact)
        this.setState({
            Name: '',
            Surname: '',
            Phone: '',
            group: ''
        });
        
    };
    render() {
        return (
            
            
                <form onSubmit={this.handleSubmit} className='add-contact-form'>
                <div class="contact100-form-title"  >
                    
                    <span class="contact100-form-title-1">
                        CONTACTS MANAGER
				</span>

                    <span class="contact100-form-title-2">
                        Feel free to drop  a line below!
				</span>
                </div>
                    
                <div className="wrap-input100 validate-input" data-validate="Name is required">
                    <label className="wrap-input100 validate-input" data-validate="Phone is required">NAME:</label>
                    <input class="input100" onChange={this.handleChange} value={this.state.Name} id='id-checklist' type='text' placeholder='Name' name='Name'/>
                    <span class="focus-input100"></span>
                    </div>
                <div className="wrap-input100 validate-input" data-validate="surname is required">
                    <label className="wrap-input100 validate-input" data-validate="Phone is required">SURNAME:</label>
                    <input class="input100"  onChange={this.handleChange} value={this.state.Surname} type='text' placeholder='Surname' name='Surname'/>
                    <span class="focus-input100"></span>
                    </div>

                <div className="wrap-input100 validate-input" data-validate="Phone is required">
                    <label className="wrap-input100 validate-input" data-validate="Phone is required">PHONE:</label>
                    <input class="input100" onChange={this.handleChange} value={this.state.Phone} type='number' placeholder='Phone' name='Phone'/>
                    <span class="focus-input100"></span>
                    </div>

                <div className="wrap-input100 validate-input" data-validate="Phone is required">
                    <label className="wrap-input100 validate-input" data-validate="Phone is required">GROUPS:</label>
                    <select onSubmit={this.handleSubmit} name='group' value={this.state.group} onChange={this.handleChange} >
                            <option   >FAMILY</option>
                            <option  >CUSTOMER</option>
                            <option  >FRIEND</option>
                            <option>LEADER</option>
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

export default ContactHomePage;