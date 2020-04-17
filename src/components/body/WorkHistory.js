import React, { useState } from 'react'
import styled from 'styled-components'
import { Box } from '@primer/components'
import { Accordion, Header, Image, Icon } from '../../styled/Components'
import WorkDetails from './WorkDetails'

// Images
import Verisys from '../../images/verisys-logo.png'
import KPMG from '../../images/kpmg-logo.png'
import UoU from '../../images/universityofutah-logo.png'
import Albion from '../../images/alboin-logo.png'
import AgriLife from '../../images/agrillife-logo.png'

// Styled
const Year = styled.div`
  display: inline-block;
  height: 32px;
  color: #222731;
  font-family: Roboto;
  font-size: 29px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 38px;
`

const workHistory = [
  { year: 2019, url: Verisys, company: 'verisys' },
  { year: 2017, url: KPMG, company: 'kpmg' },
  { year: 2017, url: UoU, company: 'uou' },
  { year: 2013, url: Albion, company: 'albion' },
  { year: 2009, url: AgriLife, company: 'agrilife' },
]


const WorkHistory = ({...rest}) => {
  const [company, setCompany] = useState('')

  const updateCompany = (newCompany) => {
    const oldCompany = company
    if(newCompany !== oldCompany){
      setCompany(newCompany)
    } else if(newCompany === oldCompany){
      setCompany('')
    }
  }

  const angleIcon = (forCompany) => {
    if(forCompany === company){
      return 'fas fa-angle-down fa-2x'
    } else {
      return 'fas fa-angle-right fa-2x'
    }
  }

  const renderWorkHistory = () => {
    if(workHistory && workHistory.length > 0){
      return workHistory.map((wh, index) => (
        <Accordion.Section key={index}>
          <Accordion.SubSection height={65} alignItems='center'>
            <Accordion.Block><Year>{wh.year}</Year></Accordion.Block>
            <Accordion.Block>
              <Image src={wh.url} />
            </Accordion.Block>
            <Accordion.Block>
              <Icon 
                className={angleIcon(wh.company)}
                color='#BA5A31' 
                onClick={() => updateCompany(wh.company)}
              />
            </Accordion.Block>
          </Accordion.SubSection>
          { company === wh.company && <WorkDetails company={company} /> }
        </Accordion.Section>
      ))
    }
  }

  return (
    <Box>
      <Header.H1>Dev Experience</Header.H1>
      <Accordion.Frame>
        { renderWorkHistory() }
      </Accordion.Frame>
    </Box>
  )
}

export default WorkHistory
