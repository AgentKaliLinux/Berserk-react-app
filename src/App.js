import React from 'react'
import Header from "./components/Header"
import Home from "./components/Home"
import Nostalgia from "./components/Nostalgia"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./styles/App.scss"
import "./styles/header.scss"
import "./styles/home.scss"
import "./styles/footer.scss"
import "./styles/mediaquery.scss"


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nostalgia' element={<Nostalgia />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App