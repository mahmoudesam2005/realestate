import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="">

        </Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
