import React from 'react'
import styled from 'styled-components'

const Field = styled.input`
  height: 100px;
  font-size: 25px;
  font-weight: 700;
  width: 100%;
  padding: 0 48px 0 98px;

  &:focus{
    outline: none;
  }
`

const Input = (props) => {
  const { onChange, onSubmit } = props

  return(
    <form onSubmit={onSubmit}>
      <Field 
        type='text' 
        placeholder='Escolha uma localidade' 
        onChange={onChange}
      />
    </form>
  )
}

export default Input 