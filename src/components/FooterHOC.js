import React from 'react'
import { Flex } from '@primer/components'
import { Title, Image } from '../styled/Components'
import styled from 'styled-components'

import GitHub from '../images/GitHub-Mark-32px.png'
import LinkedIn from '../images/linkedin.png'

const ImageBox = styled(Flex)`
  margin-right: 8px;
  margin-left: 8px;
`

const FooterHOC = ({...rest}) => {

  return (
    <Flex flexDirection='column'>
      <Title>Learn More</Title>
      <ImageBox>
        <Image src={GitHub} width='30px' height='30px' />
        <Image src={LinkedIn} width='30px' height='30px' />
      </ImageBox>
    </Flex>
  )
}

export default FooterHOC
