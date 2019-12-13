import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  height: 500px;
  background: blue;
`

const Weather = ({ weather }) => {
  console.log('weather', weather)

  return <Section />
}

export default Weather