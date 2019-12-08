import React, { Component } from 'react'
import styled from 'styled-components'
import Input from './Input'

const Section = styled.section`
  height: 200px;
  background: yellow;
`

class Search extends Component {

  state = {
    location: 'Rio de Janeiro'
  }

  onHandlerLocale = () => {
    const currentVal = event.target.value

    this.setState({
      location: currentVal
    })
  }

  onSubmitForm = () => {
    event.preventDefault()
    console.log('onSubmitForm', event.target[0].value)

  }

  render(){
    return (
      <Section>
        <Input onChange={this.onHandlerLocale} onSubmit={this.onSubmitForm}/>
      </Section>
    )
  }
}

export default Search