import React from 'react'
import styled from 'styled-components'
import variable from '../../variable'
import Icon from '../../assets/images/icon-search.svg'

const Field = styled.input`
  height: 100px;
  font-size: 25px;
  font-weight: 700;
  width: 100%;
  padding: 0 48px 0 98px;
  background: ${variable.color.light};
  border: 0;
  background-image: url(${Icon});
  background-size: 68px;
  background-position: 15px;
  background-repeat: no-repeat;
  color: ${variable.color.gray};

  &:focus{
    outline: none;
  }

  @media (max-width: ${variable.grid.mobile}px){
    padding: 0 18px 0 80px;
    font-size: 20px;
    background-size: 50px;
    background-position: 15px;
  }
`

const Input = (props) => {
  const { onChange, onSubmit, value } = props

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