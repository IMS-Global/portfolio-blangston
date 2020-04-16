import React from 'react'
import { Flex } from '@primer/components'
import { Image } from '../styled/Components'
import { Header } from '../styled/Header'
import styled from 'styled-components'

import GitHub from '../images/github-brands.png'
import LinkedIn from '../images/linkedin-brands.png'

const ImageBox = styled(Flex)`
  margin-right: 8px;
  margin-left: 8px;
`

const FooterHOC = ({...rest}) => {

  return (
    <Flex flexDirection='column' p='1rem'>
      <Header.H1>Learn More</Header.H1>
      <ImageBox>
        <Image src={GitHub} width='30px' height='30px' />
        <Image src={LinkedIn} width='30px' height='30px' />
      </ImageBox>
    </Flex>
  )
}

export default FooterHOC
