import React from "react";
import ReactDOM from "react-dom"
import App from './app'
import './style.css'
import getData from './getData'

getData()

const container = document.getElementById("app")

container && ReactDOM.render(<App />, container)