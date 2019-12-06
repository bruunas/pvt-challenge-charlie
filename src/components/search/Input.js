import React from 'react'
import styled from 'styled-components'

const Field = styled.input`
  background: pink;
`

const Input = (props) => {
  const { onChange } = props

  return(
    <Field 
      type='text' 
      placeholder='Escolha uma localidade' 
      onChange={onChange}
    />
  )
}

export default Input 