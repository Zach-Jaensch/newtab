import React from 'react'
import WeatherIcon from 'components/WeatherIcon'
import styled from 'styled-components'
import theme from 'components/theme'

const Display = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${theme.gutter};
  align-content: center;
`

const Icon = styled.span`
  display: flex;
  margin: ${theme.gutter};
  height: 3rem;
`

const Text = styled.span`
    display: flex;
    flex-direction: column;
    padding: ${theme.gutter};
`

const P = styled.p`
  margin: 0;
`

const Large = styled(P)`
  font-size: 2rem;
`

const Small = styled(P)`
  font-size: 1rem;
`



export default function LargeWeather({ description, iconId, temp }) {
  return (
    <Display>
      <Icon>
        <WeatherIcon iconId={iconId} />
      </Icon>
      <Text>
        <Large>
          {Math.round(temp)} &#8451;
        </Large>
        <Small>
          {description}
        </Small>
      </Text>
    </Display>
  )
}
