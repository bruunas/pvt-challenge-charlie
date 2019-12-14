import React from 'react'
import styled from 'styled-components'
import Panel from './Panel'

const Section = styled.section`
  
`

const Weather = ({ weather }) => {
  return (
    <Section>
      { 
        weather.map((item, idx) =>  <Panel key={`panel_${idx}`} data={item} idx={idx} />)
      }
    </Section>
  )
}

export default Weather