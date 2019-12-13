import React, { Component } from 'react'
import styled from 'styled-components'
import Search from './components/search/Search'
import Background from './components/background/Background'
import Weather from './components/weather/Weather'
import { getCurrentLocale, getWeather, getImageBing } from './Data'

const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
`


const WeatherContext = React.createContext()

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      weather: {}
    }
  }

  componentDidMount(){
    getCurrentLocale()
    getWeather().then(res => {
      const arr = res.data.list

      this.getWeatherList(arr)
    })

    // getImageBing().then(res => console.log(res)).catch(error => {
    //   if (!error.response) {
    //     this.errorStatus = 'Error: Network Error';
    //   } else {
    //     this.errorStatus = error.response.data.message;
    //   }
    // })
  }

  getWeatherList(arr) {
    const date = new Date()
    const dateDay = date.getDate()
    const firstDay = new Date(arr[0].dt_txt).getDate()

    const firstDayIsCurrentDay = dateDay == firstDay

    this.setState({
      weather: {
        today: arr[0],
        tomorrow: firstDayIsCurrentDay ? arr.slice(8, 16)[0] : arr.slice(1, 9)[0],
        after_tomorrow: firstDayIsCurrentDay ? arr.slice(17, 25)[0] : arr.slice(10, 18)[0]
      }
    })
  }

  render() {
    return (
      <Container>
        <WeatherContext.Provider value={this.state.weather}>
          <WeatherContext.Consumer>
            { weather => (
              <div>
                <Background />
                <Search />
                <Weather weather={weather} />
              </div>
            )}
          </WeatherContext.Consumer>
        </WeatherContext.Provider>
      </Container>
    )
  }
}

export default App;
