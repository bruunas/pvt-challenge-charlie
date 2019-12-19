import React, { Component } from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Input from './Input'
import getGeocode from '../../Data'

const Section = styled.section`
`

class Search extends Component {

  state = {
    location: '',
    loadingBrowserLocation: false,
    initialValue: ''
  }

  componentDidUpdate(prevProps){
    const prevLocation = prevProps.location.location
    const currentLocation = this.props.location.location

    if(!prevLocation.length && currentLocation.length){

      this.setState({
        loadingBrowserLocation: true,
        initialValue: currentLocation
      })
    }
  }

  onHandlerLocale = () => {
    const currentVal = event.target.value

    this.setState({
      location: currentVal
    })
  }

  onFocus = () => {
    this.setState({
      loadingBrowserLocation: false,
      initialValue: ''
    })
  }

  onSubmitForm = () => {
    event.preventDefault()

    // getGeocode().then(res, console.log('getGeocode', res.data))
  }


  render(){
    const { loadingBrowserLocation } = this.state
    const { location } = this.props

    return (
      <Section>
        <Input 
          onChange={this.onHandlerLocale} 
          onSubmit={this.onSubmitForm}
          initialValue={location}
        />
      </Section>
    )
  }
}

const mapStateToProps = ({ location }) => ({ location })

export default connect(mapStateToProps)(Search)