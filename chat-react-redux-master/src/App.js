import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Chat from './components/chat';
import './App.css';


export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Chat}/>
            </Switch>
        </div>
    );
}
