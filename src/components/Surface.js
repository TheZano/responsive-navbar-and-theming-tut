import React from "react"
import styled, { css } from "styled-components"

export const Surface = styled.div`
  background: ${({ theme }) => {
    return theme.colors.surface
  }};
  color: ${({ theme }) => theme.colors.text};
  ${(props) => {
    switch (props.elevation) {
      case 2:
        return elevation2
      case 1:
        return elevation1
      default:
        return elevation1
    }
  }}
`

const elevation1 = css`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`

const elevation2 = css`
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`
