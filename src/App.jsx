import React from 'react'
import { Routes, Route } from 'react-router-dom' // New: Import Routes and Route

// Layout Components
import Navbar from './components/HeaderSection/Navbar'
import Footer from './components/Footer/Footer'

// Page Components (New Imports)
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import WorksPage from './pages/WorksPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <div className=''>
      {/* Navbar and Footer are outside the Routes to appear on all pages */}
      <Navbar/>
      
      <Routes>
        {/* Define routes for the new pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App