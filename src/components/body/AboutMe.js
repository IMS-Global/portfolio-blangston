import React from 'react'
import { Box } from '@primer/components'
import { Title, Info } from '../../styled/Components'

const AboutMe = ({...rest}) => {

  return (
    <Box>
      <Title fontSize={2}>About Me</Title>
      <Info as='p'>
        Qualified professional with a well-developed acumen reflecting a career 
        of strong skills coupled with hands-on software development and data analysis.
        Recognized ability to apply advanced technical solutions to a diverse range of 
        project requirements. Record of delivering mission critical solutions and 
        products on time and under budget. Team based work style and superior interpersonal skills.
      </Info>
    </Box>
  )
}

export default AboutMe
