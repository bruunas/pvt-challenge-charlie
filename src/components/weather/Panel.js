import React, { useState, useEffect } from 'react'
import styled, {keyframes} from 'styled-components'
import Loadable from 'react-loadable';
import variable from '../../variable'
import PanelDisabled from './PanelDisabled'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const Container = styled.div`
  background-color: ${props => props.theme};
  color: ${variable.color.white};
  display: flex;
  opacity: 0;

  ${props => props.active && (`
    animation: ${fadeIn} 800ms ease;
    animation-fill-mode: forwards;
  `)}

  @media (max-width: ${variable.grid.mobile}px){
    flex-direction: column-reverse;
  }
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
  
  @media (max-width: ${variable.grid.mobile}px){
    height: auto;
  }
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
    max-width: 100%;
  }

  @media (max-width: ${variable.grid.mobile}px){
    width: 100%;
  }
`

const Infos = styled.div`
  width: 40%;

  @media (max-width: ${variable.grid.mobile}px){
    width: 100%;
    text-align: center;
  }
`


const Panel = ({ data, idx, onClick, active, title }) => {

  const dataObj = Object.values(data).length

  if( !dataObj ){ return <PanelDisabled title={title} />}

  const { wind, weather, main } = data
  const { temp, pressure, humidity } = main
  const dataIcon = weather[0].icon

  const tempCelsius = parseInt(temp - 273.15)
  
  const convertToC = `${tempCelsius}°C`
  const convertToF = `${parseInt((temp - 273.15) * 9/5 + 32)}°F`

  const [internationalTemp, setInternationalTemp] = useState(false)
  const [temperatureTheme, setTemperatureTheme] = useState('yellow')
  const [moduleActive, setModuleActive] = useState(false)
  
  useEffect( () => {
    setModuleActive(true)
  }, [])


  if(tempCelsius < 15) {
    setTemperatureTheme('blue')
  } 
  
  if( tempCelsius > 35){
    setTemperatureTheme('red')
  }

  const Loading = (props) => {
    if (props.error) {
      console.log('Loading Error! ', props.error); 
      return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
    } else {
      return <div>Loading...</div>;
    }
  }

  const IconWeather = Loadable({
    loader: () => import(`../../assets/images/image_${dataIcon}.svg`),
    loading: Loading,
    render( url ){ return <img src={url.default} /> }
  })

  return (
    <Container 
      theme={variable.color[temperatureTheme][idx]}
      active={moduleActive}
      onClick={onClick}>
      <Figure active={active}>
        <IconWeather></IconWeather>
      </Figure>
      <Infos>
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
      </Infos>
    </Container>
  )
}

export default Panel