// import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import Services from './components/Services'
import Clients from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
