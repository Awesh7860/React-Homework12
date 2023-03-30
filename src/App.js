import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Card from './Components/Card'
import "./Styles/App.scss"
import "./Styles/Home.scss"
import "./Styles/Card.scss"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App