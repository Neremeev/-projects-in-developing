import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Layout from './containers/layout'
import Phone from './containers/phone'
import Basket from './containers/basket'


export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Layout}/>
                <Route path="/phones/:id" component={Phone}/>
                <Route path='/basket' component={Basket} />
            </Switch>
        </div>
    );
}
