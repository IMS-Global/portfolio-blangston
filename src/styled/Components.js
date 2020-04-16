import { Flex, Box, Heading, Text } from '@primer/components'
import { color, space, layout } from 'styled-system'
import styled from 'styled-components'

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

