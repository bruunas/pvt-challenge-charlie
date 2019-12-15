import React, { useState } from 'react'
import styled from 'styled-components'
import Panel from './Panel'

const Section = styled.section`
  
`



const Weather = ({ weather }) => {
  const [panelActive, setPanelActive] = useState(0)

  return (
    <Section>
      { 
        weather.map((item, idx) =>  (
          <Panel 
            key={`panel_${idx}`} 
            data={item} 
            idx={idx} 
            onClick={() => setPanelActive(idx)}
            active={panelActive === idx ? true : false}
          />
        ))
      }
    </Section>
  )
}

export default Weather