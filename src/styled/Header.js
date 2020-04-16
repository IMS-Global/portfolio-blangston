import { Heading } from '@primer/components'
import styled from 'styled-components'

const Header = {}

Header.Base = styled(Heading)`
  color: #3A404F;
  font-family: Roboto;
  font-weight: bold;
  letter-spacing: 0.35px;
`
Header.H1 = styled(Header.Base)`
  height: 40px;
  font-size: 32px;
  line-height: 40px;
`
Header.H2 = styled(Header.Base)`
  height: 32px;
  font-size: 24px;
  line-height: 32px;
`
Header.H3 = styled(Header.Base)`
  height: 24px;
  font-size: 16px;
  line-height: 24px;
`
Header.H4 = styled(Header.Base)`
  height: 16px;
  font-size: 8px;
  line-height: 16px;
`

export { Header }
