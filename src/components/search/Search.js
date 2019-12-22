import React, { Component } from 'react'
import {connect} from 'react-redux'
import styled from 'styled-components'
import Input from './Input'
import { getGeocode, getWeather } from '../../Data'
import { setLocation } from '../../store/location'
import { setDataWeather } from '../../store/weather'

const Section = styled.section`
`

class Search extends Component {
  
  constructor(props){
    super(props)
    
    this.inputRef = React.createRef()
    
    this.state = {
      location: '',
      loadingBrowserLocation: false
    }
  }
  
  
  componentDidUpdate(prevProps){
    const prevLocation = prevProps.location.location
    const currentLocation = this.props.location.location
    
    if(!prevLocation.length && currentLocation.length){
    
      this.setState({
        loadingBrowserLocation: true,
        location: this.props.location.location
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
      loadingBrowserLocation: false
    })
  }
  
  onSubmitForm = () => {
    event.preventDefault()

    const currentVal = this.inputRef.current.props.value
    
    getGeocode(currentVal).then(res => {
      const geoCode = Object.values(res.data.results[0].geometry)
            
      getWeather(geoCode).then((res) => {
        const arr = res.data.list
        
        this.props.setLocation(res.data.city.name)
        this.props.setDataWeather(arr)
      }).catch(error => {
        if (!error.response) {
          this.errorStatus = 'Error: Network Error';
        } else {
          this.errorStatus = error.response.data.message;
        }

        console.log('Weather ERROR!', this.errorStatus)

        return null
      })
    }).catch(error => {
        if (!error.response) {
          this.errorStatus = 'Error: Network Error';
        } else {
          this.errorStatus = error.response.data.message;
        }

        console.log('Geocode ERROR!', this.errorStatus)
    })
  }
  
  
  render(){

    return (
      <Section>
        <Input 
          onChange={this.onHandlerLocale} 
          onSubmit={this.onSubmitForm}
          ref={this.inputRef}
          value={this.state.location}
        />
      </Section>
      )
    }
  }
  
  const mapStateToProps = ({ location }) => ({ location })
  
  export default connect(mapStateToProps, {setLocation, setDataWeather})(Search)