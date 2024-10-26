import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';



function App() {

  const routes = [
    {path: "/", element: <Home />}
  ]
  
  return (
    <Router basename="/realestate">
      <Nav />
      <Routes>
        {routes.map(route => (
          <>
            <Route path={route.path} element={route.element} />
          </>
        ))}
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
