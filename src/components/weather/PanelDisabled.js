import React from 'react'
import styled from 'styled-components'
import variable from '../../variable'

const Container = styled.div`
  background-color: ${variable.color.gray};
  color: ${variable.color.white};
  display: flex;
  cursor: not-allowed;
  justify-content: flex-end;

  @media (max-width: ${variable.grid.mobile}px){
    flex-direction: column-reverse;
  }
`

const Head = styled.div`
  height: 116px;
  padding: 12px 0;
`

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 24px;
  margin-bottom: 10px;
`

const Infos = styled.div`
  width: 40%;

  @media (max-width: ${variable.grid.mobile}px){
    width: 100%;
    text-align: center;
  }
`


const PainelDisabled = ({title}) => {

  return (
    <Container>
      <Infos>
        <Head>
          <Title>{ title }</Title>
        </Head>
      </Infos>
    </Container>
  )
}

export default PainelDisabled