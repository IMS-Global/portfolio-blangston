import React from 'react'
import { Box } from '@primer/components'
import { Header, Table } from '../../styled/Components'
import styled from 'styled-components'


const SkillType = styled.div`
  display: inline-block;
  height: 21px;
  color: #423F38;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.19px;
  line-height: 21px;
`
const SkillYears = styled.div`
  display: inline-block;
  height: 21px;
  color: #222731;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.19px;
  line-height: 21px;
  text-align: right;
`

const skillSets = [
  { type: 'React', years: 3 },
  { type: 'Redux', years: 3 },
  { type: 'WebPack', years: 3 },
  { type: 'Ruby On Rails', years: 3 },
  { type: 'SideKiq', years: 3 },
  { type: 'Redis', years: 3 },
  { type: 'PostgreSQL', years: 5 },
  { type: 'MySQL', years: 4 },
]

const WhatImGoodAt = ({...rest}) => {

  const renderSkillSets = () => {
    if(skillSets && skillSets.length > 0){
      return skillSets.map((ss, index) => (
        <Table.Body key={index}>
          <Table.Row>
            <Table.Cell flexGrow={3}>
              <SkillType>
                {ss.type}
              </SkillType>
            </Table.Cell>
            <Table.Cell flexGrow={1}>
              <SkillYears>
                {ss.years}&nbsp;years
              </SkillYears>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      ))
    }
  }

  return (
    <Box>
      <Header.H1>What I'm Good At</Header.H1>
      <Table.Frame>
        { renderSkillSets() }
      </Table.Frame>
    </Box>
  )
}

export default WhatImGoodAt
