import React, { useState } from 'react'
import Panel from './Panel'

const Weather = ({ weather }) => {
  if( !weather ){ return null}

  const [panelActive, setPanelActive] = useState(0)

  return (
    <section>
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
    </section>
  )
}

export default Weather