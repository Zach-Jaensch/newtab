import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  display: flex;
  height: 100%;
  width: auto;
`

export default function WeatherIconDisplay({iconId}) {
  return <Image height="50" width="50" src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} alt="" />
}
