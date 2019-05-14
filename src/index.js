import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import Button from '@material-ui/core/Button';


import {
	Route,
    Switch,
    Router
} from "react-router-dom";

import About from "views/About"
import Article from "views/Article"
import Home from "views/Home"
var hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/landing-page" component={Home} />
            <Route path="/profile-page" component={About} />
            <Route path="/login-page" component={Article} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
