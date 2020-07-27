import React, { useState } from "react"
import NavBar from "./components/NavBar"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import "styled-components/macro"
import Ilustration from "./assets/ilustration.png"
import { ThemeModeProvider } from "./contexts/theme"
import { themeLight, themedark } from "./constants/themes"
import { Surface } from "./components/Surface"

function App() {
  const [mode, setMode] = useState("light")

  const GlobalStyle = createGlobalStyle`
  body {
    background: ${
      mode === "light"
        ? themeLight.colors.background
        : themedark.colors.background
    }
  }
`
  return (
    <ThemeProvider theme={mode === "light" ? themeLight : themedark}>
      <div className="App">
        <GlobalStyle />
        <ThemeModeProvider value={{ mode, setMode }}>
          <NavBar />
        </ThemeModeProvider>
        {/* <Hero>
          <Banner></Banner>
        </Hero> */}
        <Container>
          <Surface
            elevation={2}
            css={`
              max-width: 400px;
              padding: 1rem;
              width: 100%;
            `}
          >
            <h1>hello world</h1>
            <h2>hello world</h2>
            <h3>hello world</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              quis dapibus est, sit amet porttitor lorem. Morbi maximus velit at
              nulla cursus elementum. Donec faucibus, metus ac ullamcorper
              maximus, mauris neque venenatis nibh, id egestas neque lorem et
              elit. Sed blandit sem at sodales rhoncus. Cras leo lacus, molestie
              non ipsum posuere, varius rhoncus risus. Quisque scelerisque
              mattis pellentesque. Phasellus in mi sed arcu pellentesque
              iaculis. Ut id fermentum purus. Praesent in turpis ac quam dictum
              pretium vitae ac turpis. Aenean laoreet odio quis augue sodales
              tristique. Donec vehicula odio at urna aliquam sagittis. Maecenas
              ultricies sodales justo, eu hendrerit turpis eleifend in.
              Pellentesque ac rutrum ligula, a tempus nisl. Nunc dignissim,
              turpis quis pretium placerat, est erat sagittis ex, quis laoreet
              urna diam sed neque. Mauris pretium purus at lectus fermentum
              feugiat. Sed fermentum ac ligula ac sodales. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Fusce pharetra posuere augue sit amet iaculis.
              Pellentesque mattis leo ut interdum blandit. Aenean at mi sed urna
            </p>
          </Surface>
        </Container>
      </div>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  height: 92vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`

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
