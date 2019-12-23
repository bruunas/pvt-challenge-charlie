import React, { Component } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import Search from './components/search/Search'
import Background from './components/background/Background'
import Weather from './components/weather/Weather'
import Loading from './components/Loading/Loading'
import { getWeather, getImageBing } from './Data'
import { setLatLong, setLocation } from './store/location'
import { setDataWeather } from './store/weather'

const Container = styled.div`
  background: url(${props => props.background}) no-repeat center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
`

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1075px;
  padding: 12px;
`

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
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
      this.props.setDataWeather(arr)
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

  render() {
    const { background, weather  } = this.state

    if( !background && !weather){ return <Loading />}
    
    return (
      <Container background={ background && background}>
        <Content>
          <Search />
          <Weather />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({location, weather}) => ({location, weather})

export default connect(mapStateToProps, { setLatLong, setLocation, setDataWeather })(App);
