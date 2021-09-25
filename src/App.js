import React from 'react';
import styled from 'styled-components'

import { WeatherProvider } from './contexts/Weather'

import CurrentWeather from './components/CurrentWeather'
import Footer from './components/Footer'
import Link from './components/Link'

const StyledApp = styled.div`
  font-family: sans-serif;
  color: lightgray;
`

const Background = styled.div`
  background-image: url(background.jpg);
  background-size: 100vw 100%; 
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`

function App() {
  return (
    <StyledApp>
      <Background />
      <WeatherProvider>
        <CurrentWeather/>
        <Footer>
          <Link href="https://github.com/Zach-Jaensch">GitHub</Link>
          <Link href="https://facebook.com/ZachJaensch">facebook</Link>
        </Footer>
      </WeatherProvider>
    </StyledApp>
  );
}


export default App;
