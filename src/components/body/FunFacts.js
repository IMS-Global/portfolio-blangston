import React from 'react'
import { Box, Text, Button } from '@primer/components'
import { Title } from '../../styled/Components'

const FunFacts = ({...rest}) => {

  return (
    <Box backgroundColor='#F6F2ED'>
      <Title>Fun Facts</Title>
      <Text as='p'>
        I published 6 Peer Reviewed Science Articles between 2002 and 2011
      </Text>
      <Button color='#BA5A31'>View Publications</Button>
    </Box>
  )
}

export default FunFacts
