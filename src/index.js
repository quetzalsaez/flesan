import React from 'react';
import ReactDOM from 'react-dom'
import logo from './assets/images/logo.png';
import axios from 'axios';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,  
} from "react-router-dom";
import store from './app/store'
import { Provider } from 'react-redux'

/* var browserHistory = Router.browserHistory; */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router >      
        <App />
      </Router>,
    </Provider>
  </React.StrictMode>,  
  document.getElementById('root')
);