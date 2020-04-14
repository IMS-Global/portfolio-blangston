import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Flex } from '@primer/components'
import HomePage from './body/HomePage'

const BodyHOC = () => {

  return (
    <Switch>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  )
}

export default BodyHOC
