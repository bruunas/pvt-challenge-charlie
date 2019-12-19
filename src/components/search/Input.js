import React, {useEffect, useState} from 'react'
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
  const { onChange, onSubmit, initialValue } = props
  const [fieldVal, setFieldVal] = useState('Rio de Janeiro')

  useEffect(() => {
    setFieldVal(initialValue.location)
  }, [initialValue])

  const handlerField = (event, callback) => {
    setFieldVal(event.target.value)
    callback()
  }

  return(
    <form onSubmit={onSubmit}>
      <Field 
        type='text' 
        placeholder='Escolha uma localidade' 
        onChange={(e) => handlerField(e, onChange)}
        value={fieldVal}
      />
    </form>
  )
}

export default Input 