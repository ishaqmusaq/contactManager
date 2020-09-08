import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import editedContact  from './components/editedContact';
import Register from './components/Register';
import Login from './components/Login';
 import ProtectedRoute from  './components/ProtectedRoute'

export default function Router  ()  {
    return (
        <BrowserRouter>
            <ProtectedRoute exact path='/' component={App} />
            <ProtectedRoute path='/edit/:id' component={editedContact} />
            <Route path='/contactHomePage' component={editedContact} />
            <Route path='/Register' component={Register} />
            <Route path='/Login' component={Login} />

        </BrowserRouter>
    );
}

