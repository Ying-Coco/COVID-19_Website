import React from 'react';
import {Route, IndexRoute} from 'react-router-dom';

import App from './app';
import Map from './Map/Map';


export default (
    <React.Fragment>
    <Route exact path="/" component={App}></Route>
    <Route exact path="/Map" component={Map}/></React.Fragment>
)