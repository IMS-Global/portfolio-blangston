import styled from 'styled-components'
import { Flex, Box } from '@primer/components'
import { layout, border } from 'styled-system'

const Accordion = {}

Accordion.Frame = styled(Flex).attrs(p => ({
  flexDirection: 'column',
  mt: 16,
  mb: 16,
}))``

Accordion.Section = styled(Flex).attrs(p => ({
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
`

Accordion.SubSection = styled(Flex).attrs(p => ({
  justifyContent: p.justifyContent ? p.justifyContent : 'space-between',
}))`
  ${ layout }

  padding: 0.25rem 0.5rem;
`

Accordion.Block = styled(Box)``

export { Accordion }


