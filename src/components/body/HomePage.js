import React from 'react'
import { Flex } from '@primer/components'
import AboutMe from './AboutMe'
import WhatImGoodAt from './WhatImGoodAt'
import WorkHistory from './WorkHistory'
import FunFacts from './FunFacts'

const HomePage = ({...rest}) => {

  return (
    <Flex flexDirection='column' p='1rem'>
      <AboutMe />
      <WhatImGoodAt />
      <WorkHistory />
      <FunFacts />
    </Flex>
  )
}

export default HomePage
