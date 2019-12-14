import React from 'react'

const Panel = ({ data }) => {
  const title = Object.keys(data)[0].replace('_', ' ').replace('_', ' ')
  const dataObj = Object.values(data)
  
  const { wind, weather } = dataObj[0]
  const { temp, pressure, humidity } = dataObj[0].main

  const convertToC = `${ parseInt(temp - 273.15) }°C`
  const convertToF = `${parseInt((temp - 273.15) * 9/5 + 32)}°F`

  return (
    <div>
      <h2>{ title }</h2>
      temperature: {convertToC}  // {convertToF}<br/>
      { weather[0].description } <br/>
      pressão: {pressure}hPA <br/>
      Humidade: {humidity}% <br/>
      Pressão: {wind.speed}km/h
    </div>
  )
}

export default Panel