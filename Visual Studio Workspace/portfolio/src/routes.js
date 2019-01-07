import React from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';
import Home from '../containers/Home/Home';
import App from '../containers/App/App';

export default hot(module)(App) (
    <Router history = {hashHistory}>
        <Route path ="/" component={App}>
            <IndexRoute component = {Home}/>
        </Route>
    </Router>
);