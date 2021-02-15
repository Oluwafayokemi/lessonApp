import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './commons/header'
import { Dashboard } from './Dashboard'
import { Chapters } from './Dashboard/Chapters'

const App = () => {
  return (
    <Switch>
      <div className='App'>
        <Route path='/'>
          <Header />
        </Route>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route path='/chapters/:id'>
          <Chapters />
        </Route>
      </div>
    </Switch>
  )
}

export default App
