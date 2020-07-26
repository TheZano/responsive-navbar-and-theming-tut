import React from "react"
import NavBar from "./components/NavBar"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import Ilustration from "./assets/ilustration.png"

function App() {
  const theme = {
    colors: {
      primary: "#EE4D2D",
      text: "#000",
      background: "#fafafa",
      surface: "#FFF",
    },
  }

  const themedark = {
    colors: {
      primary: "#F55839",
      text: "#fff",
      background: "#212121",
      surface: "#333333",
    },
  }

  const GlobalStyle = createGlobalStyle`
  body {
    background: ${themedark.colors.background}
  }
`

  return (
    <ThemeProvider theme={themedark}>
      <div className="App">
        <GlobalStyle />
        <NavBar />
        <Hero>
          <Banner></Banner>
        </Hero>
      </div>
    </ThemeProvider>
  )
}

const Hero = styled.div`
  min-height: 300px;
  background: ${(props) => props.theme.colors.primary};
`
const Banner = styled.div`
  background: url(${Ilustration}) no-repeat;
  background-size: contain;
  height: 30vh;
  /* @media screen and (min-width: 720px) {
    background-position-x: 5%;
    background-size: 50vw;
  }
  @media screen and (min-width: 1024px) {
    background-position-x: 5%;
    background-size: 60vw;
  } */
`

export default App
