import React, { useState, useEffect } from 'react'
import { Container, Image } from '../styled/Components'
import { motion } from 'framer-motion'
import { shuffle } from 'lodash'
import styled from 'styled-components'

import Ruby from '../images/ruby_logo.svg'
import Rails from '../images/ruby_on_rails.svg'
import ReactJS from '../images/reactjs_logo.svg'
import Redux from '../images/redux_logo.svg'
import GitHub from '../images/github_logo.svg'

const UnOrderedList = styled.ul`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
`
const ListElement = styled(motion.li)`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  width: 50px;
  height: 50px;
`
const Logo = styled(Image)`
  width: 40px;
  height: 40px;
  margin: 5px;
`

const ColoredIcons = [
  { color: '#222731', icon: Ruby },
  { color: '#423F38', icon: Redux },
  { color: '#BA5A31', icon: ReactJS },
  { color: '#3A404F', icon: Rails },
  { color: '#D3D0CB', icon: GitHub },
  //{ color: '#F6F2ED', icon: '' },
]

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
}

const Technologies = ({...rest}) => {
  const [colors, setColors] = useState([])

  const mappedColors = () => ColoredIcons.map(ci => ci.color)

  const loadColors = () => {
    setColors(mappedColors())
  }
  useEffect(loadColors, [])

  const updateColors = () => {
    setTimeout(() => setColors(shuffle(mappedColors())), 1000)
  }
  useEffect(updateColors, [colors])

  const renderListItems = () => {
    if(colors && colors.length > 0) {
      return colors.map((color, index) => (
        <ListElement
          key={index}
          layoutTransition={spring}
          style={{ background: color}}
        >
          <Logo src={ColoredIcons[index].icon} />
        </ListElement>
))
    }
  }

  return (
    <Container.Row justifyContent='center'>
      <UnOrderedList>
        { renderListItems() }
      </UnOrderedList>
    </Container.Row>
  )
}

export default Technologies
