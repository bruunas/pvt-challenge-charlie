import axios from 'axios'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  },
  timeout: 2000
}

const defaultCoord = ['-22.91', '-43.21']
const defaultCity = 'Rio de Janeiro'

export const getWeather = (coord) => {
  // API 3 hours | 5 days
  // https://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml

  const API_KEY = '7ba73e0eb8efe773ed08bfd0627f07b8'

  const getData = axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${defaultCoord[0]}&lon=${defaultCoord[1]}&appid=${API_KEY}`)

  return getData
}

export const getImageBing = () => {
  return axios.get('https://bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR', config)
}

export const getGeocode = () => {
  return axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${defaultCity}&key=c63386b4f77e46de817bdf94f552cddf&language=en`)
}

export const getCurrentLocale = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log( position.coords.latitude,  position.coords.longitude);

    const Lat = position.coords.latitude
    const Log = position.coords.longitude
  });
}

export  const Data = () => {
  axios.all([getWeather(), getGeocode()], config)
  .then(axios.spread((weather, geocode, img) => {
    console.log('Data', weather.data, geocode.data, img)
  }));

  return console.warn('Lat/Log ::: +22011-040/@-22.9641411')
}