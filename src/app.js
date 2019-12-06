import React, { Component } from 'react';
import Search from './components/search/Search'
import Background from './components/background/Background'
import Weather from './components/weather/Weather'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Background />
        <Search />
        <Weather/>
      </React.Fragment>
    )
  }
}

export default App;
