import React, { useState } from 'react'
import styled from 'styled-components'

const Head = styled.div`
  height: 116px;
  padding: 12px 0;
`

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
`

const Temperature = styled.button`
  font-size: 28px;

  .temp{
    &-celsius{
      display: block;
    }
    
    &-fahrenheit{
      display: none;
    }
  }

  ${ props => props.internationalTemp && (
    `
      .temp{
        &-celsius{
          display: none;
        }
        
        &-fahrenheit{
          display: block;
        }
      }

    `
  )}
`

const Panel = ({ data }) => {
  const title = Object.keys(data)[0].replace('_', ' ').replace('_', ' ')
  const dataObj = Object.values(data)
  
  const { wind, weather } = dataObj[0]
  const { temp, pressure, humidity } = dataObj[0].main

  const convertToC = `${ parseInt(temp - 273.15) }°C`
  const convertToF = `${parseInt((temp - 273.15) * 9/5 + 32)}°F`

  const [internationalTemp, setInternationalTemp] = useState(false)

  console.log('internationalTemp', internationalTemp)

  return (
    <div>
      <Head>
        <Title>{ title }</Title>
        <Temperature onClick={() => setInternationalTemp(!internationalTemp)} internationalTemp={internationalTemp}>
          <span className='temp-celsius'>{convertToC}</span>
          <span className='temp-fahrenheit'>{convertToF}</span>
        </Temperature>
      </Head>

      { weather[0].description } <br/>
      pressão: {pressure}hPA <br/>
      Humidade: {humidity}% <br/>
      Pressão: {wind.speed}km/h
    </div>
  )
}

export default Panel