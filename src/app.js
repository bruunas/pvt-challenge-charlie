import React, { Component } from 'react'
import styled from 'styled-components'
import Search from './components/search/Search'
import Background from './components/background/Background'
import Weather from './components/weather/Weather'
import { getCurrentLocale, getWeather } from './Data'

const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
`


const ThemeContext = React.createContext('blue')

class App extends Component {
  componentDidMount(){
    getCurrentLocale()
    getWeather().then(res => {
      const arr = res.data.list

      this.getWeatherList(arr)
    })
  }

  getWeatherList(arr) {
    const date = new Date()
    const dateDay = date.getDate()
    const firstDay = new Date(arr[0].dt_txt).getDate()

    const firstDayIsCurrentDay = dateDay == firstDay

    const weather = {
      today: arr[0],
      tomorrow: firstDayIsCurrentDay ? arr.slice(8, 16)[0] : arr.slice(1, 9)[0],
      after_tomorrow: firstDayIsCurrentDay ? arr.slice(17, 25)[0] : arr.slice(10, 18)[0]
    }

    console.log(weather)
  }

  render() {
    return (
      <Container>
        <ThemeContext.Provider value="dark">
          <ThemeContext.Consumer>
            { theme => (
              <div>
                <Background />
                <Search theme={theme}/>
                <Weather/>
              </div>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </Container>
    )
  }
}

export default App;
