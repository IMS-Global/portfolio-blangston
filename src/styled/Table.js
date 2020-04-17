import styled from 'styled-components'
import { Flex, Box } from '@primer/components'
import { layout, border } from 'styled-system'

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
  backgroundColor: '#F6F2ED',
  borderColor: '#F6F2ED',
  borderWidth: 1,
  borderStyle: 'solid',
}))`
  ${ border }

  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  &:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:nth-child(even) {
    background-color: #FFF;
  }
`

Table.Row = styled(Flex).attrs(p => ({
  justifyContent: p.justifyContent ? p.justifyContent : 'space-between',
}))`
  ${ layout }

  padding: 0.2rem 0.5rem;
`

Table.Cell = styled(Box)``

export { Table }

