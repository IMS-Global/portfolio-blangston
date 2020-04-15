import React from 'react';
import { Switch, Route } from 'react-router-dom'
import BodyHOC from './components/BodyHOC'
import HeaderHOC from './components/HeaderHOC'
import FooterHOC from './components/FooterHOC'
import Technologies from './components/Technologies'
import './App.css';

function App() {
  return (
    <>
      <HeaderHOC />
      <Technologies />
      <Switch>
        <Route path="/">
          <BodyHOC />
        </Route>
      </Switch>
      <FooterHOC />
    </>
  );
}

export default App;
