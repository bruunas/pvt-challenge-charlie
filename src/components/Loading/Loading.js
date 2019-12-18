import React from 'react'
import styled, { keyframes } from 'styled-components'
import variables from '../../variable'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoadingAnimation = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

const LoadingIcon = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  div{
    position: absolute;
    border: 4px solid ${variables.color.black};
    opacity: 1;
    border-radius: 50%;
    animation: ${LoadingAnimation} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`



const Loading = () => {
  return (
    <Container className="loading">
      <LoadingIcon className='loading-icon'>
        <div></div>
        <div></div>
      </LoadingIcon>
    </Container>
  )
}

export default Loading