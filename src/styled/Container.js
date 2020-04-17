import styled from 'styled-components'
import { Flex } from '@primer/components'
import { border } from 'styled-system'

const Container = {}

Container.Row = styled(Flex).attrs(p => ({
  flexDirection: p.flexDirection ? p.flexDirection : 'row',
  backgroundColor: p.backgroundColor ? p.backgroundColor : '#FFF',
}))`
  ${ border }

  padding: 16px;
`

Container.Col = styled(Container.Row).attrs(p => ({
  flexDirection: 'column',
}))``

export { Container }
