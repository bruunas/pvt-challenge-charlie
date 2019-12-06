import React, { Component } from 'react'
import styled from 'styled-components'
import Input from './Input'

const Section = styled.section`
  height: 200px;
  background: yellow;
`

const Search = () => {
  const onHandlerLocale = () => {
    console.log('onHandlerLocale', event.target.value)
  }

  return (
    <Section>
      <Input onChange={onHandlerLocale}/>
    </Section>
  )
}

export default Search