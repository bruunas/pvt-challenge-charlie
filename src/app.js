import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import Search from './components/search/Search'
import Background from './components/background/Background'
import Weather from './components/weather/Weather'
import Loading from './components/Loading/Loading'
import { getWeather, getImageBing } from './Data'
import { setLatLong, setLocation } from './store/location'

const Container = styled.div`
  background: url(${props => props.background})
`

const WeatherContext = React.createContext()

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      weather: null,
      background: null,
      loading: true
    }
  }

  componentDidMount(){
    this.getCurrentLocale()

    getImageBing().then( (res) => {
      const { url } = res.data.images[0]

      this.setState({
        background: `https://www.bing.com${url}`
      })

    }).catch(error => {
      if (!error.response) {
        this.errorStatus = 'Error: Network Error';
      } else {
        this.errorStatus = error.response.data.message;
      }
    })
  } 

  getWeather = () => {
    const { location } = this.props

    getWeather(location.latlong).then(res => {
      const arr = res.data.list

      this.props.setLocation(res.data.city.name)

      this.getWeatherList(arr)
    })
  }

  getCurrentLocale = () => {
    const { setLatLong } = this.props

    navigator.geolocation.getCurrentPosition((position) => {

      const Lat = position.coords.latitude
      const Log = position.coords.longitude

      setLatLong([Lat, Log])
      this.getWeather()
    });
  }

  getWeatherList(arr) {
    const date = new Date()
    const dateDay = date.getDate()
    const firstDay = new Date(arr[0].dt_txt).getDate()

    const firstDayIsCurrentDay = dateDay == firstDay

    this.setState({
      weather: [
        {hoje: arr[0]},
        {amanha: firstDayIsCurrentDay ? arr.slice(8, 16)[0] : arr.slice(1, 9)[0]},
        {depois_de_amanha: firstDayIsCurrentDay ? arr.slice(17, 25)[0] : arr.slice(10, 18)[0]}
      ]
    })
  }

  render() {

    const { background, weather  } = this.state

    if( !background && !weather){ return <Loading />}
    
    return (
      <Container background={ background && background}>
        <div className='content' css={`
          max-width: 60%;
          margin: 0 auto;
        `}>
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
        </div>
      </Container>
    )
  }
}

const mapStateToProps = ({location}) => ({location})

export default connect(mapStateToProps, { setLatLong, setLocation })(App);
