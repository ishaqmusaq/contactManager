import React from 'react';
import { connect } from 'react-redux'
import { registerEmailWithPassword,loginWithGoogle } from './store/authAction';
 
function Register(props) {
    if (!props.auth.isLoaded) return null;
    if (props.auth.uid) props.history.push('/');
    const handleSubmit = (e) =>{
        e.preventDefault()
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
        props.registerEmailWithPassword(email,password);
    };


    return (
        <div>
            <h1>Register Now</h1>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label>Email:</label>
                    <input name="email" type="email" placeholder="email"/>
                </div>

                <div className="password">
                    <label>Password :</label>
                    <input name="password" type="password" placeholder="password" />
                </div>
                <hr/>
                <button type="submit"> join</button>
                <hr />
                <button onClick={props.loginWithGoogle}>

                    <img
                        src="https://openthread.google.cn/images/ot-contrib-google.png"
                        width="100"
                        alt="google button " />
                </button>
            </form>
            
        </div>
    );
}


    const mapStateToProps = (state) => {
        return {
            auth: state.firebase.auth
        }

    }




const mapDispatchToProps  = {
registerEmailWithPassword,
loginWithGoogle,
}

export  default connect(mapStateToProps,mapDispatchToProps)(Register)

