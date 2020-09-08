import React from 'react';
import { connect } from 'react-redux'
import { loginEmailWithPassword ,loginWithGoogle } from './store/authAction';


function Login (props) {
    if (!props.auth.isLoaded) return null;
    if(props.auth.uid) props.history.push('/');
    const handleSubmit = (e) => {
        e.preventDefault()
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;
       props.loginEmailWithPassword(email, password);
    };


    return (
        <div>
            <h1>Login Now</h1>
            <form onSubmit={handleSubmit}>
                <div className="email">
                    <label htmlFor="exampleDropdownFormEmail2">Email address</label>
                    <input name='email' type='email' className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com" />
                </div>
                <div className="password">
                    <label htmlFor="exampleDropdownFormPassword2">Password</label>
                    <input type="password" name='password' className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" />
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                        <label className="form-check-label" htmlFor="dropdownCheck2">
                            Remember me
      </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>

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
    return{
        auth : state.firebase.auth
    }

}


const mapDispatchToProps = {
    loginEmailWithPassword,
    loginWithGoogle,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

