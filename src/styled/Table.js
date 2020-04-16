import styled from 'styled-components'
import { Flex, Box } from '@primer/components'
import { layout } from 'styled-system'

const Table = {}

Table.Frame = styled(Flex).attrs(p => ({
  flexDirection: 'column',
  mt: 16,
  mb: 16,
}))``

Table.Header = styled(Flex).attrs(p => ({
  flexDirection: 'column',
}))``

Table.Body = styled(Flex).attrs(p => ({
  flexDirection: 'column',
}))``

Table.Row = styled(Flex).attrs(p => ({
  justifyContent: p.justifyContent ? p.justifyContent : 'space-between',
}))`
  ${ layout }

  padding: 0.25rem 0.5rem;

  :nth-child(odd) {
    background-color: #F6F2ED;
  }
`

Table.Cell = styled(Box)``

export { Table }

