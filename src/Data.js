import axios from 'axios'

const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    timeout: 2000
  }

export const getWeather = () => {
  return axios.get('https://api.openweathermap.org/data/2.5/weather?q=rio%20de%20janeiro&APPID=7ba73e0eb8efe773ed08bfd0627f07b8')
}

export const  getImageBing = () => {
  return axios.get('https://bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR')
}

export const getGeocode = () => {
  return axios.get('https://api.opencagedata.com/geocode/v1/json?q=rio%20de%20janeiro&key=c63386b4f77e46de817bdf94f552cddf&language=en')
}

export const getCurrentLocale = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    console.log(typeof position.coords.latitude, typeof position.coords.longitude);

    const Lat = position.coords.latitude
    const Log = position.coords.longitude
  });
}

export  const Data = () => {
  axios.all([getWeather(), getGeocode()], config)
  .then(axios.spread((weather, geocode, img) => {
    console.log('Data', weather.data, geocode.data, img)
  }));

  return console.warn('Lat/Log ::: +22011-040/@-22.9641411,-43.1772938,')
}