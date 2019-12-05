import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import App from './App'
import * as serviceWorker from './serviceWorker';
import getData from './getData'


ReactDOM.render(<App />, document.getElementById('root'));
getData()
serviceWorker.unregister();