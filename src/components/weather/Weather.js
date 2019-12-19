import React, { useState } from 'react'
import { connect } from 'react-redux'
import Panel from './Panel'

const Weather = ( { weather } ) => {
  const [panelActive, setPanelActive] = useState(0)

  return (
    <section>
      { 
        Object.values(weather).map((item, idx) =>  (
          <Panel 
            key={`panel_${idx}`} 
            data={item.data}
            title={item.title}
            idx={idx} 
            onClick={() => setPanelActive(idx)}
            active={panelActive === idx ? true : false}
          />
        ))
      }
    </section>
  )
}


const mapStateToProps = ({ weather }) => ({ weather })
export default connect(mapStateToProps)(Weather)