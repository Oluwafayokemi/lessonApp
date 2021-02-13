import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { Header } from './commons/header'
import { Dashboard } from './Dashboard'

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route path='/'>
          <Header />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard />
        </Route>
        {/* <Route path="/chapters">
          <Chapters />
        </Route> */}
      </Switch>
      <Dashboard />
    </div>
  )
}

export default App

const Container = styled.div`
  .App {
    height: 100%;
    background-color: #e5e5e5;
  }
`
