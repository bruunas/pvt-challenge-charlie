import React, { Component } from 'react'
import styled from 'styled-components'
import Search from './components/search/Search'
import Background from './components/background/Background'
import Weather from './components/weather/Weather'

const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
`

class App extends Component {
  render() {
    return (
      <Container>
        <Background />
        <Search />
        <Weather/>
      </Container>
    )
  }
}

export default App;
