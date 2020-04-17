import { Text } from '@primer/components'
import styled from 'styled-components'

const Paragraph = {}

Paragraph.Base = styled(Text).attrs(p => ({
  as: 'p',
}))`
  color: #222731;
  font-family: Roboto;
  letter-spacing: 0.19px;
`

Paragraph.Normal = styled(Paragraph.Base)`
  font-size: 16px;
  line-height: 21px;
`

export { Paragraph }
