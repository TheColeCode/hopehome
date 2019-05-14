import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';

import Home from './Views/Home';
import Page from './Views/Page';
import Posts from './Views/Posts';
import Children from './Views/Children';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <Router>
      <App>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' render={(props) => <Page {...props} id={2} />}/>
          <Route exact path='/post/' render={(props) => <Posts {...props} id={1} />}/>
          <Route exact path='/children' component={Children} />
        </Switch>
	    </App>
    </Router>

,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
