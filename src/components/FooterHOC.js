import React from 'react'
import { Flex } from '@primer/components'
import { Container, Image, Header } from '../styled/Components'
import styled from 'styled-components'

import GitHub from '../images/github-brands.png'
import LinkedIn from '../images/linkedin-brands.png'

const ImageBox = styled(Flex)`
  margin-right: 8px;
  margin-left: 8px;
`

const FooterHOC = ({...rest}) => {

  return (
    <Container.Col>
      <Header.H1>Learn More</Header.H1>
      <ImageBox>
        <Image src={GitHub} width='30px' height='30px' />
        <Image src={LinkedIn} width='30px' height='30px' />
      </ImageBox>
    </Container.Col>
  )
}

export default FooterHOC
