import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import editedContact  from './components/editedContact';

export default function Router  ()  {
    return (
        <BrowserRouter>
            <Route exact path='/' component={App} />
            <Route path='/edit/:id' component={editedContact} />
            <Route path='/contactHomePage' component={editedContact} />

        </BrowserRouter>
    );
}

