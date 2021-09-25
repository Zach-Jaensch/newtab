import styled from 'styled-components'

export default styled.a`
  color: inherit;
  text-decoration: none;
  &:not(:first-child) {
    padding-left: 1rem;
  }
  &:not(:last-child) {
    padding-right: 1rem;
  }
`
