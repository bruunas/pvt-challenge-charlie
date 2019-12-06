import axios from 'axios'

const getImageBing = () => {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '',
      'Content-Type': 'application/json'
    },
    timeout: 2000
  }

  return axios.get('https://bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR', config)
}

const getWeather = () => {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=rio%20de%20janeiro&APPID=7ba73e0eb8efe773ed08bfd0627f07b8')
}

const getGeocode = () => {
  return axios.get('https://api.opencagedata.com/geocode/v1/json?q=rio%20de%20janeiro&key=c63386b4f77e46de817bdf94f552cddf&language=en')
}

const getData = () => {

  axios.all([getWeather(), getGeocode(), getImageBing()])
  .then(axios.spread((weather, geocode, img) => {
    console.log('getData', weather, geocode, img)
  }));

  return console.warn('Lat/Log ::: +22011-040/@-22.9641411,-43.1772938,')
}

export default getData