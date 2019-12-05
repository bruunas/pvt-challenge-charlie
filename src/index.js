import React from "react";
import ReactDOM from "react-dom"
import App from './App'
import './style.css'
import * as serviceWorker from './serviceWorker';
import getData from './getData'


ReactDOM.render(<App />, document.getElementById("app"));
getData()
serviceWorker.unregister();