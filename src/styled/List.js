import { Box } from '@primer/components'
import { border, layout } from 'styled-system'
import styled from 'styled-components'

const List = {}

List.Box = styled(Box).attrs(p => ({
  backgroundColor: '#FFF',
  borderRadius: 5,
}))`
  ${ layout }
  ${ border }

  border-right: 2px solid #F6F2ED;
  border-left: 2px solid #F6F2ED;
`

List.UnOrdered = styled.ul`
  padding-right: 1rem;

  li::before {
    color: #BA5A31;
  }
`
List.Item = styled.li`
  color: #222731;
  font-family: Roboto;
  font-size: 14px;
  letter-spacing: 0.19px;
  line-height: 21px;
  margin-bottom: 0.25rem;
`

export { List }
