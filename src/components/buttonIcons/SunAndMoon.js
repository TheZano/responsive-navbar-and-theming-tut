import React from "react"
import "styled-components/macro"
// Adapted from: https://codepen.io/aaroniker/pen/KGpXZo and https://github.com/narative/gatsby-theme-novela/blob/714b6209c5bd61b220370e8a7ad84c0b1407946a/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx

const ColorModeToggle = (props) => {

  return (
    <label
      css={`
        cursor: pointer;
        input {
          display: none;
          & + div {
            border-radius: 50%;
            width: 36px;
            height: 36px;
            position: relative;
            box-shadow: inset 16px -16px 0 0 #fff;
            transform: scale(1) rotate(-2deg);
            transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;
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
              box-shadow: 0 -23px 0 #5628EE, 0 23px 0 #5628EE, 23px 0 0 #5628EE,
                -23px 0 0 #5628EE, 15px 15px 0 #5628EE, -15px 15px 0 #5628EE,
                15px -15px 0 #5628EE, -15px -15px 0 #5628EE;
              transform: scale(0);
              transition: all 0.3s ease;
            }
          }
          &:checked + div {
            box-shadow: inset 32px -32px 0 0 #fff;
            transform: scale(0.5) rotate(0deg);
            transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
            &:before {
              background: #5628EE;
              transition: background 0.3s ease 0.1s;
            }
            &:after {
              transform: scale(1.5);
              transition: transform 0.5s ease 0.15s;
            }
          }
        }
      `}
    >
      <input type="checkbox" />
      <div></div>
    </label>
  )
}

export default ColorModeToggle
