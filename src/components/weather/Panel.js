import React, { useState } from 'react'
import styled, {css} from 'styled-components'
import variable from '../../variable'
import image_01d from '../../assets/images/image_01d.svg'
import image_50d from '../../assets/images/image_50d.svg'
import image_13d from '../../assets/images/image_13d.svg'
import image_11d from '../../assets/images/image_11d.svg'
import image_10d from '../../assets/images/image_10d.svg'
import image_09d from '../../assets/images/image_09d.svg'
import image_04d from '../../assets/images/image_04d.svg'
import image_03d from '../../assets/images/image_03d.svg'
import image_02d from '../../assets/images/image_02d.svg'

const Container = styled.div`
  background-color: ${props => props.theme};
  color: ${variable.color.white};
  display: flex;
`

const Head = styled.div`
  height: 116px;
  padding: 12px 0;
`

const Content = styled.div`
  max-height: 0;
  overflow: hidden;
  height: 224px;

  ${ props => props.active && `max-height: 100%;`}
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

const Figure = styled.figure`
  width: 55%;
  height: 340px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  max-height: 0;

  ${ props => props.icon && (`
    background-image: url(${image_01d});
  `)}

  ${ props => props.active && `max-height: 100%;`}
`

const Panel = ({ data, idx, onClick, active }) => {

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

  const dataIcon = dataObj[0].weather[0].icon

  return (
    <Container theme={variable.color[temperatureTheme][idx]} onClick={onClick}>
      <Figure icon={`image_${dataIcon}`} active={active}></Figure>
      <div css={`width: 40%;`}>
        <Head>
          <Title>{ title }</Title>
          <Temperature onClick={() => setInternationalTemp(!internationalTemp)} internationalTemp={internationalTemp}>
            <span className='temp-celsius'>{convertToC}</span>
            <span className='temp-fahrenheit'>{convertToF}</span>
          </Temperature>
        </Head>
        <Content active={active}>
          <Description>
            { weather[0].description }
          </Description>

          <p>Pressão: {pressure}hPA</p>
          <p>Humidade: {humidity}%</p>
          <p>Vento: {wind.speed}km/h</p>
        </Content>
      </div>
    </Container>
  )
}

export default Panel