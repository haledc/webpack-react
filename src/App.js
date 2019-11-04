import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './containers/Home'
import About from './containers/About'

const App = () => (
  <>
    <BrowserRouter>
      <Nav />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  </>
)

export default App
