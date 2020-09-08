import React from 'react';
import { connect} from  'react-redux';
import {Route,Redirect} from 'react-router-dom'

 function ProtectedRoute({component : Component,auth, ...rest}) {
     //if contact is logged in
if(!auth.isLoaded) return null;
  if (auth.uid){
      return( <Route
       {...rest} 
         render={(props) => {
          return <Component {...props} />
      }} />
      );
  }

    //but if the contact is not logged in

     return (<Route 
      {...rest} 
       render={(props) => {
         return <Redirect to= {{pathname :'/Login'}}/>
     }} />
     );
    
}

const mSTP =(state) =>{
    return{
        auth: state.firebase.auth
    }

}

export default connect(mSTP )(ProtectedRoute)
