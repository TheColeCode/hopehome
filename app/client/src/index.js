import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Components/Home';

import Page from './Components/Page';
// import Children from './Components/Children';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(

    <Router>
      <App>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={Page} id={3}/>
        </Switch>
	    </App>
    </Router>

,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
