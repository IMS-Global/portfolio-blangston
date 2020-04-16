import { color, space, layout } from 'styled-system'
import styled from 'styled-components'

export { Button } from './Button'
export { Header } from './Header'
export { List } from './List'
export { Table } from './Table'
export { Paragraph } from './Paragraph'

export const Image = styled.img`
  ${ space }
  ${ layout }

  &:nth-child(n) {
    margin-left: 8px;
  }
`

export const Icon = styled.i`
  ${ color }
`

