import React from "react";
import ReactDOM from "react-dom"
import App from './app'
import './style.css'

const container = document.getElementById("app")
container ? ReactDOM.render(<App />, wrapper) : false