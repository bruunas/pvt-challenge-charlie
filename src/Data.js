import axios from 'axios'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
}

export const getWeather = (coord) => {

  const API_KEY = '7ba73e0eb8efe773ed08bfd0627f07b8'

  const getData = axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord[0]}&lon=${coord[1]}&appid=${API_KEY}&&lang=pt_br`)

  return getData
}

export const getImageBing = () => {
  return axios.get('/api/v1/bing')
}

export const getGeocode = () => {
  return axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${defaultCity}&key=c63386b4f77e46de817bdf94f552cddf&language=en`)
}

const Data = (props) => {
  console.log('mapStateToProps', location)


  axios.all([getWeather(), getGeocode()], config)
  .then(axios.spread((weather, geocode, img) => {
    console.log('Data', weather.data, geocode.data, img)
  }));

  return console.warn('Lat/Log ::: +22011-040/@-22.9641411')
}

export default Data
