import React from 'react'
import { Box } from '@primer/components'
import { Header, Paragraph } from '../../styled/Components'

const AboutMe = ({...rest}) => {

  return (
    <Box>
      <Header.H1>About Me</Header.H1>
      <Paragraph.Normal>
        Qualified professional with a well-developed acumen reflecting a career 
        of strong skills coupled with hands-on software development and data analysis.
        Recognized ability to apply advanced technical solutions to a diverse range of 
        project requirements. Record of delivering mission critical solutions and 
        products on time and under budget. Team based work style and superior interpersonal skills.
      </Paragraph.Normal>
    </Box>
  )
}

export default AboutMe
