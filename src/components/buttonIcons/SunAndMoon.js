import React, { useState, useContext, useEffect } from "react"
import "styled-components/macro"
import styled from "styled-components/macro"
import { themedark, themeLight } from "../../constants"
import { ThemeModeContext } from "../../contexts/theme"
// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/714b6209c5bd61b220370e8a7ad84c0b1407946a/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx

const ColorModeToggle = (props) => {
  const [checked, setChecked] = useState(true)
  const { mode, setMode } = useContext(ThemeModeContext)


  useEffect(() => {
    if(checked) {
      setMode('dark')
    } else {
      setMode('light')
    }
  }, [checked])

  return (
    <Label {...props}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(_) => setChecked(!checked)}
      />
      <div></div>
    </Label>
  )
}

const Label = styled.label`
  cursor: pointer;
  input {
    display: none;
    & + div {
      border-radius: 50%;
      width: 27px;
      height: 27px;
      position: relative;
      box-shadow: inset 12px -8px 0 0 ${themeLight.colors.toggleIcon};
      transform: scale(1) rotate(-2deg);
      transition: box-shadow 0.3s ease 0s, transform 0.2s ease 0.1s;
      &:before {
        content: "";
        width: inherit;
        height: inherit;
        border-radius: inherit;
        position: absolute;
        left: 0;
        top: 0;
        transition: background 0.3s ease;
      }
      &:after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: -4px 0 0 -4px;
        position: absolute;
        top: 50%;
        left: 50%;
        box-shadow: 0 -20px 0 ${themedark.colors.toggleIcon},
          0 20px 0 ${themedark.colors.toggleIcon},
          20px 0 0 ${themedark.colors.toggleIcon},
          -20px 0 0 ${themedark.colors.toggleIcon},
          12px 12px 0 ${themedark.colors.toggleIcon},
          -12px 12px 0 ${themedark.colors.toggleIcon},
          12px -12px 0 ${themedark.colors.toggleIcon},
          -12px -12px 0 ${themedark.colors.toggleIcon};
        transform: scale(0);
        transition: all 0.3s ease;
      }
    }
    &:checked + div {
      box-shadow: inset 32px -32px 0 0 ${themeLight.colors.toggleIcon};
      transform: scale(0.5) rotate(0deg);
      transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
      &:before {
        background: ${themedark.colors.toggleIcon};
        transition: background 0.3s ease 0.1s;
      }
      &:after {
        transform: scale(1.5);
        transition: transform 0.5s ease 0.15s;
      }
    }
  }
`

export default ColorModeToggle
