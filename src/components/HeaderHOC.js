import React from 'react'
import { Flex, Box } from '@primer/components'
import { Container, Image } from '../styled/Components'
import styled from 'styled-components'

import BrennickImage from '../images/brennick-with-outline.svg'

const BaseName = styled(Box)`
  height: 38px;
  width: 126px;
  font-family: Roboto;
  font-size: 29px;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 38px;
`
const FirstName = styled(BaseName)`
  color: #BA5A31;
`
const LastName = styled(BaseName)`
  color: #222731;
  margin-top: -10px;
`
const EmploymentType = styled(Box)`
  height: 21px;
  width: 144px;
  color: #222731;
  font-family: Roboto;
  font-size: 16px;
  letter-spacing: 0.19px;
  line-height: 21px;
`
const Menu = styled.div`
  margin-top: 50%;
  margin-bottom: 50%;
`

const HeaderHOC = ({...rest}) => {

  const showMenu = () => {
    debugger
  }

  return (
    <Container.Col backgroundColor='#D3D0CB'>
      <Box>
        <Flex justifyContent='space-between'>
          <Box flexGrow={2}>
            <FirstName>Brennick</FirstName>
            <LastName>Langston</LastName>
              <EmploymentType>Frontend Developer</EmploymentType>
          </Box>
          <Box flexGrow={1} mr='1rem'>
            <Menu onClick={showMenu}>
              <i className="fas fa-bars fa-2x" />
            </Menu>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex backgroundColor='#D3D0CB' justifyContent='center'>
          <Image src={BrennickImage} mb={-16}/>
        </Flex>
      </Box>
    </Container.Col>
  )
}

export default HeaderHOC
