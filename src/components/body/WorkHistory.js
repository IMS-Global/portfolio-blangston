import React from 'react'
import styled from 'styled-components'
import { Box } from '@primer/components'
import { Title, Image, Icon, Table, Row, Cell } from '../../styled/Components'

// Images
import Verisys from '../../images/verisys-logo.png'
import KPMG from '../../images/kpmg-logo.png'
import UoU from '../../images/universityofutah-logo.png'
import Albion from '../../images/alboin-logo.png'
import AgriLife from '../../images/agrillife-logo.png'

// Styled
const Year = styled.div`
  display: inline-block;
  height: 38px;
  color: #222731;
  font-family: Roboto;
  font-size: 29px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 38px;
`

const workHistory = [
  { year: 2019, url: Verisys },
  { year: 2017, url: KPMG },
  { year: 2017, url: UoU },
  { year: 2013, url: Albion },
  { year: 2009, url: AgriLife },
]

const WorkHistory = ({...rest}) => {

  const renderWorkHistory = () => {
    if(workHistory && workHistory.length > 0){
      return workHistory.map((wh, index) => (
        <Row key={index} height={80} alignItems='center'>
          <Cell><Year>{wh.year}</Year></Cell>
          <Cell>
            <Image src={wh.url} />
          </Cell>
          <Cell>
            <Icon className='fas fa-angle-right fa-2x' color='#BA5A31' />
          </Cell>
        </Row>
      ))
    }
  }

  return (
    <Box>
      <Title> Dev Expirience</Title>
      <Table>
        { renderWorkHistory() }
      </Table>
    </Box>
  )
}

export default WorkHistory
