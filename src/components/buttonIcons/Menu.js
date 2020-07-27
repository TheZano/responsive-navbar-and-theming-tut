import React, { useState } from "react"
import styled from "styled-components"

const Menu = ({toggled, ...props}) => {

  return (
    <Wrapper {...props}>
      <Line1 toggle={toggled}></Line1>
      <Line2 toggle={toggled}></Line2>
      <Line3 toggle={toggled}></Line3>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  border: none;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0);
  &:hover {
    background: rgba(0,0,0,0.1);
  }
  @media screen and (min-width: 960px) {
    display: none;
  }
`

const Line = styled.div`
  width: 24px;
  height: 2px;
  background-color: ${({theme}) => theme.colors.text};
  margin: 8px 0;
  transition: all 0.3s ease;
`

const Line1 = styled(Line)`
  transform: ${props => props.toggle && 'rotate(-45deg) translate(-7px, 7px)'};
`
const Line2 = styled(Line)`
  opacity: ${props => props.toggle && 0};
`
const Line3 = styled(Line)`
  transform: ${props => props.toggle && 'rotate(+45deg) translate(-7px, -7px);'};
`

export default Menu
