import React from "react";
import { render } from 'react-dom'
import App from './app'
import './style.css'
import { Data } from './Data'

render(
  <App />,
  document.getElementById('app'),
  console.log('DATA', Data())
)