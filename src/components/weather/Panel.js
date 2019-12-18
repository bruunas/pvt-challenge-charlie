import React, { useState } from 'react'
import styled from 'styled-components'
import Loadable from 'react-loadable';
import variable from '../../variable'
// import IconWeather from './Icon'

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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
  height: 340px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  max-height: 0;
  overflow: hidden;
  padding: 35px 0;

  ${ props => props.active && `max-height: 100%;`}

  img{
    max-height: 100%;
  }
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

  const Loading = (props) => {
    if (props.error) {
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else {
      return <div>Loading...</div>;
    }
  }


  const IconWeather = Loadable({
    loader: () => import(`../../assets/images/image_${dataIcon}.svg`),
    loading: Loading,
    render(url, props){
      return <img src={url.default} />
    }
  })

  
  return (
    <Container theme={variable.color[temperatureTheme][idx]} onClick={onClick}>
      <Figure active={active}>
        <IconWeather alt={weather[0].description}></IconWeather>
      </Figure>
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