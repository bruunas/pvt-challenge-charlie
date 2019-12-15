import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import variable from '../../variable'

const Container = styled.div`
  height: 340px;
  background-color: ${props => props.theme};
  color: ${variable.color.white};
`

const Head = styled.div`
  height: 116px;
  padding: 12px 0;
`

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 10px;
`

const Temperature = styled.button`
  font-size: 28px;
  color: ${variable.color.white};

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

const Description = styled.p`
  font-size: 28px;
  text-transform: capitalize;
  margin-bottom: 25px;
`

const Panel = ({ data, idx }) => {
  const title = Object.keys(data)[0].replace('_', ' ').replace('_', ' ')
  const dataObj = Object.values(data)
  
  const { wind, weather } = dataObj[0]
  const { temp, pressure, humidity } = dataObj[0].main

  const tempCelsius = parseInt(temp - 273.15)

  const convertToC = `${tempCelsius}°C`
  const convertToF = `${parseInt((temp - 273.15) * 9/5 + 32)}°F`

  const [internationalTemp, setInternationalTemp] = useState(false)

  const [temperatureTheme, setTemperatureTheme] = useState('yellow')

  if(tempCelsius < 15) {
    setTemperatureTheme('blue')
  } 
  
  if( tempCelsius > 35){
    setTemperatureTheme('red')
  }

  return (
    <Container theme={variable.color[temperatureTheme][idx]}>
      <div css={`width: 240px;`}>
        <Head>
          <Title>{ title }</Title>
          <Temperature onClick={() => setInternationalTemp(!internationalTemp)} internationalTemp={internationalTemp}>
            <span className='temp-celsius'>{convertToC}</span>
            <span className='temp-fahrenheit'>{convertToF}</span>
          </Temperature>
        </Head>
        <Description>
          { weather[0].description }
        </Description>

        <p>Pressão: {pressure}hPA</p>
        <p>Humidade: {humidity}%</p>
        <p>Vento: {wind.speed}km/h</p>
      </div>
    </Container>
  )
}

export default Panel