import React from 'react'
import { Container } from '../../styled/Components'
import AboutMe from './AboutMe'
import WhatImGoodAt from './WhatImGoodAt'
import WorkHistory from './WorkHistory'
import FunFacts from './FunFacts'

const HomePage = ({...rest}) => {

  return (
    <Container.Col>
      <AboutMe />
      <WhatImGoodAt />
      <WorkHistory />
      <FunFacts />
    </Container.Col>
  )
}

export default HomePage
