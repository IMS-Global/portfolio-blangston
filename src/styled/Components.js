import { Flex, Box, Heading, Text } from '@primer/components'
import { color, layout } from 'styled-system'
import styled from 'styled-components'

export const Title = styled(Heading)`
  height: 38px;
  color: #3A404F;
  font-family: Roboto;
  font-size: 29px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 38px;
`
export const Info = styled(Text)`
  height: 252px;
  width: 298px;
  color: #222731;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.19px;
  line-height: 21px;
`
export const Image = styled.img``

export const Icon = styled.i`
  ${ color }
`

export const Table = styled(Flex).attrs(p => ({
  flexDirection: 'column',
}))`
`
export const Row = styled(Flex).attrs(p => ({
  justifyContent: 'space-between',
}))`
  ${ layout }
  padding: 0.25rem 0.5rem;

  :nth-child(odd) {
    background-color: #F6F2ED;
  }
`
export const Cell = styled(Box)``
