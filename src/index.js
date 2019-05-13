import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

import About from "views/About"
import Article from "views/Article"

import {
    BrowserRouter ,
	Route,
	Switch,
	Redirect,
	Link
} from "react-router-dom";


class Home extends React.Component {
	render() {
		return (
            <div>
                <ul>
                    <li>
                        <Button><Link to='/'>home</Link></Button>
                    </li>
                    <li>
                        <Button><Link to='/about'>about</Link></Button>
                    </li>
                    <li>
                        <Button><Link to='/article'>article</Link></Button>
                    </li>
                </ul>
                <h1>This is home page</h1>
            </div>
		)
	}
}


ReactDOM.render(

    <BrowserRouter>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/article" render={() => <Article />} />
    </BrowserRouter>,

	document.getElementById("root")
);
