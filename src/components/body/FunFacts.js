import React from 'react'
import { Box, Text, Button } from '@primer/components'
import { Title } from '../../styled/Components'
import styled from 'styled-components'

const ShowPubs = styled(Button)`
  background-color: #BA5A31 !important;
  color: #FFF;
`

const FunFacts = ({...rest}) => {

  return (
    <Box backgroundColor='#F6F2ED' p={16}>
      <Title>Fun Facts</Title>
      <Text as='p'>
        I published 6 Peer Reviewed Science Articles between 2002 and 2011
      </Text>
      <ShowPubs color='#BA5A31'>View Publications</ShowPubs>
    </Box>
  )
}

export default FunFacts
